#![no_std]

use gstd::{ActorId, ToOwned, exec, msg, prelude::*};
use inscribe_io::{Query, Reply, Action, Event, InscribeIoStates, Inscribe, VerifyStatus, InscribeIndexes, OrderId, Order, OrderStatus};

static mut INSCRIBEIOSTATES: Option<InscribeIoStates> = None;

#[no_mangle]
extern "C" fn init() {
    // {}
    unsafe { INSCRIBEIOSTATES = Some(InscribeIoStates::default());
 }

}



#[no_mangle]
extern "C" fn handle() {
    let state = unsafe { INSCRIBEIOSTATES.as_mut().expect("failed to get state as mut") };
    // let _block_number = exec::block_height();
    // let _sender = msg::source();
    let action: Action = gstd::msg::load().expect("failed to load action");

    match action {
        Action::Deploy { inscribe_data  } => {
            // check inscribe ticks is existing
            state.deploy(inscribe_data.clone());
            msg::reply(Event::DeployEvent { inscribe_data },0).expect("Got error");
        },

        Action::Transfer { inscribe_id, from, to, amt } => {
            // check inscribe_id is existing
            // assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);

            // // check amt is <= from: actorid's balance.
            // // 
            // let mut balances_of_inscribe = state.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            // let balance_of_from = balances_of_inscribe.get_key_value(&from).expect("msg").1.clone();
            // assert_eq!(balance_of_from - amt >= 0 as u128, true);
            // // check msg sender is equal from
            let msg_sender = msg::source();
            // assert_eq!(from, msg_sender);
            
            // // state.trnsfer(inscribe_id, from, to, amt);
            // let new_balance_of_from = balance_of_from - amt;
            // // let new_balance_of_to = amt;
            // balances_of_inscribe.insert(from, new_balance_of_from);
            // balances_of_inscribe.insert(to, amt);

            state.trnsfer(inscribe_id, from, to, amt, msg_sender);
            let _reply = msg::reply("transfer", 0);

            // todo!();
        },
        Action::Mint { inscribe_id, to  } => {
            // check inscribe_id is exsiting.
            assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
            let mut balances_of_inscribe = state.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            
            let mut inscribe_of_id = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            let max_supply = inscribe_of_id.max_supply;
            let total_supply = inscribe_of_id.total_supply;
            let amt = inscribe_of_id.amt_per_mint;
            // check max amt is reach ?

            assert_eq!(max_supply - (total_supply + amt) >= 0 as u128, true);

            // check actorid's current amt.

            let mut cureent_amt = balances_of_inscribe.get_key_value(&to).expect("msg").1.clone();

            cureent_amt += amt;           

            balances_of_inscribe.insert(to, cureent_amt);
            inscribe_of_id.total_supply += amt;

            let _ = msg::reply(Event::Mint { inscribe_id, to  }, 0);

        },
        Action::Burn { inscribe_id, from, to, amt  } => {
            // check inscribe_id is exsiting.
            assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
            let mut balances_of_inscribe = state.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            let mut inscribe_of_id = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            let max_supply = inscribe_of_id.max_supply;
            let total_supply = inscribe_of_id.total_supply;
            let amt = inscribe_of_id.amt_per_mint;
            // check max amt is reach ?

            assert_eq!(max_supply - (total_supply + amt) >= 0 as u128, true);

            balances_of_inscribe.insert(from, amt);
            inscribe_of_id.total_supply -= amt;
            // inscribe_of_id



            // check amt of actorid
            // check to actorid.
            todo!()
        },
        Action::ListSellOrder { seller, inscribe_id, amt, price } => {
            // check inscribe_id is exsiting.
            assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);

            // check amt of actorid
            let mut balances_of_inscribe = state.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            // let mut inscribe_of_id = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();

            let balances_of_seller = balances_of_inscribe.get_key_value(&seller).expect("msg").1.clone();
            assert_eq!(balances_of_seller - amt >= 0 as u128, true);

            let msg_sender = msg::source();
            assert_eq!(seller, msg_sender);
            
            // state.trnsfer(inscribe_id, from, to, amt);
            let new_balance_of_seller = balances_of_seller - amt;

            let trade_contract = exec::program_id();
            let balances_of_trade_contract = balances_of_inscribe.get_key_value(&trade_contract).expect("msg").1.clone();
            // let new_balance_of_to = amt;
            let new_balances_of_trade_contract = balances_of_trade_contract + amt;

            // transfer something to contract 
            // update balance of user and contract.

            balances_of_inscribe.insert(seller, new_balance_of_seller);
            balances_of_inscribe.insert(trade_contract, new_balances_of_trade_contract);

            // generate orderid
            let order_id:OrderId = inscribe_io::OrderId(state.last_order_id().0 + 1);
            // let orderid:OrderId = order_id;


            // create order info.
            let order_status = OrderStatus::Listed;
            let order = Order {
                seller,
                inscribe_id: inscribe_io::InscribeIndexes(inscribe_id),
                amt,
                price,
                order_status,
            };

            // save infos of order into states.

            state.insert_order_to_all_orders(order_id, order);


            let _ = msg::reply(Event::ListSellOrder { seller, inscribe_id, amt, price }, 0);


        },
        Action::Buy {  oriderid } => {
            // orderid is existing ?
            let is_orderid_valid = state.all_orders.contains_key(&OrderId(oriderid));
            assert_eq!(is_orderid_valid, true);

            // check orderid's status,read orderid's info
            let mut order = state.all_orders.get_key_value(&OrderId(oriderid)).expect("msg").1.clone();
            assert_eq!(order.order_status, OrderStatus::Listed);

            let msg_send_value = msg::value();
            let price = order.price;

            let inscribe_id = order.inscribe_id;
            let amt = order.amt;
            let seller = order.seller;
            let buyer = msg::source();

            // transfer vara check
            assert_eq!(price, msg_send_value);
            let seller_value = msg_send_value - 1000000000000;

            // transfer inscribe to buyer
            // state.trnsfer(InscribeIndexes(inscribe_id), exec::program_id(), buyer, amt);
            let mut balances_of_inscribe = state.balances.get_key_value(&inscribe_id).expect("msg").1.clone();
            let balance_of_buyer = balances_of_inscribe.get_key_value(&buyer).expect("msg").1.clone();
            let balance_of_trader_contract = balances_of_inscribe.get_key_value(&exec::program_id()).expect("msg").1.clone();
            // assert_eq!(balance_of_from - amt >= 0 as u128, true);
            // check msg sender is equal from
            // let msg_sender = msg::source();
            assert_eq!(buyer, msg::source());
            
            // state.trnsfer(inscribe_id, from, to, amt);
            let new_balance_of_buyer = balance_of_buyer + amt;
            let new_balance_of_trader_contract = balance_of_trader_contract - amt;
            // let new_balance_of_to = amt;
            balances_of_inscribe.insert(buyer, new_balance_of_buyer);
            balances_of_inscribe.insert(exec::program_id(), new_balance_of_trader_contract);
    
            
            // update order info in states.
            order.order_status = OrderStatus::Successed;
            state.all_orders.insert(OrderId(oriderid), order.clone());

            // Events of this action
            // we need use reply to send vara to seller
            // let _ = msg::reply("Order Filled {}", msg_send_value);
            let admin = ActorId::from_bs58("1F22iHpizWc2C8vsFtWxy85ne7ucHZzpGs9uX3FSHTzk4Fu".to_owned()).expect("msg");

            let _send = msg::send(seller, "Order filled", seller_value);
            let _send = msg::send(admin, "fee", 1000000000000);

            // todo!()
        },
        Action::ListBuyOrder { buyer, inscribe_id, amt, price } => {
            // check inscribe_id is exsiting.
            // check amt of actorid
            // transfer vara to contract 
            // update vara balance of contract.
            // generate orderid
            // save infos of order into states.

        },
        Action::Sell { seller, orderid } => {
            // check orderid is exsiting
            // read order's info
            // check actorid is have this inscribe, and amt is >= order amt
            // transfer inscribe to buyer of order
            // update infos in states of this inscribe
            // update order type info 

            // event of sell action.
        },
        Action::CanceleSellOrder { orderid } => {
            // check orderid
            // check order's status
            // some action to cancele
            todo!()
        },
        Action::CanceleBuyOrder { orderid } => {
            // check orderid
            // check order's status
            // some action to cancele


            todo!()
        },
        Action::UpdateInscribe { inscribe_id, inscribedata } => {
            // check msg.value.
            let value = msg::value();
            let fee: u128 = 16000000000000;
            assert_eq!(value, fee);
            // check inscribe id
            assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
            // check msg sender is owner
            let inscribe_owner = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.deployer;
            let msg_sender = msg::source();
            assert_eq!(inscribe_owner, msg_sender);
            // new infos.
            let mut new_inscribe_data: Inscribe = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            // Only this properties can be updated.
            new_inscribe_data.frame = inscribedata.frame;
            new_inscribe_data.icon = inscribedata.icon;
            new_inscribe_data.media = inscribedata.media;
            new_inscribe_data.slogan = inscribedata.slogan;
            new_inscribe_data.inscribe_type = inscribedata.inscribe_type;     

            // update action. user & other states
            state.update_inscribe(inscribe_id, new_inscribe_data.clone());
            let _ =msg::reply(Event::UpdateInscribe { inscribe_id, new_inscribe_data }, 0);

        },

        Action::Verify { inscribe_id, verifystatus } => {
            let msg_sender = msg::source();
            state.verify_status(inscribe_id, msg_sender, verifystatus.clone());

            let _ = msg::reply(Event::Verify { inscribe_id, verifystatus }, 0);      
        },
    }
}



#[no_mangle]

extern "C" fn state() {
    let query = gstd::msg::load().expect("failed to load query");
    // let mut state: VaraBetsStates = unsafe { VARABETSSTATES.as_ref().expect("failed to get contract state").clone() };

    let reply = match query {

        Query::Whoami => Reply::Whoami(gstd::msg::source()), // all zero addr
        Query::BlockNumber => Reply::BlockNumber(gstd::exec::block_height()),
        Query::BlockTimestamp => Reply::BlockTimestamp(gstd::exec::block_timestamp()),
        Query::ProgramId => Reply::ProgramId(gstd::exec::program_id()),
        Query::MessageId => Reply::MessageId(gstd::msg::id()),
        // Query::All => todo!(),
        // Query::Inscribes => Reply::Inscribes(100),
        // Query::InscribesOfActorId => Reply::InscribesOfActorId(ActorId::from_bs58("16CkY8WrzVREYNSvMJKd1nLQ2S8bjGbhoYCE95thV2CqSSXX".to_owned()).expect("msg")),
        // Query::BalanceOf(_, _) => todo!(),
        // Query::InscribeInfoByIndex(_) => todo!(),
        // Query::Inscribeowner => todo!(),
        // Query::Inscribestick => todo!(),
        // Query::InscribesMaxSupply => todo!(),
        // Query::InscribeTotalLimit => todo!(),
        // Query::InscribeMintPerActorid => todo!(),
        // Query::InscribeSlogan => todo!(),
        // Query::InscribeSocialLink => todo!(),
        // Query::InscribeIconLink => todo!(),
        // Query::InscribeFrame => todo!(),
        // Query::InscribeSupply => todo!(),
        // Query::InscribeBalances => todo!(),
        // Query::InscribeAllowances => todo!(),
        // Query::InscribeDecimals => todo!(),
        // Query::InscribeVerifyStatus => todo!(),
    };
    gstd::msg::reply(reply, 0).expect("Failed to share state");

}

