#![no_std]

use core::u128;

use gstd::{collections::BTreeMap,ActorId, ToOwned, exec, msg::{self}, prelude::*};
use inscribe_io::{Query, Reply, Action, Event, InscribeIoStates, Inscribe, VerifyStatus, InscribeIndexes, OrderId, Order, OrderStatus, MintTimes, OrderType };

static mut INSCRIBEIOSTATES: Option<InscribeIoStates> = None;
static mut INSCRIBEINDEXES: Option<InscribeIndexes> = None;
// static mut ORDER: Option<Order> = None;
// static mut ORDERID: Option<OrderId> = None;
static mut INSCRIBE: Option<Inscribe> = None;

#[no_mangle]
extern "C" fn init() {
    // {}
    unsafe { 
        INSCRIBEIOSTATES = Some(InscribeIoStates::default());
        INSCRIBEINDEXES = Some(InscribeIndexes::default());
        // ORDER = Some(Order::default());
        // ORDERID = Some(OrderId::default());
        INSCRIBE = Some(Inscribe::default());
    
    };
    // let Indexes = unsafe { INSCRIBEINDEXES.as_mut().expect("failed to init Indexes") };
    let state = unsafe { INSCRIBEIOSTATES.as_mut().expect("failed to get state as mut") };

    // need init ...
    // pub inscribe_indexes: BTreeMap<InscribeIndexes, Inscribe>,
    // pub balances: BTreeMap<InscribeIndexes, BTreeMap<ActorId, u128>>,
    // pub totalsupply: BTreeMap<InscribeIndexes,u128>,
    // pub inscribes_minted: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    // pub inscribes: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    // pub mint_times: BTreeMap<InscribeIndexes, MintTimes>,
    // pub all_orders: BTreeMap<OrderId, Order>,
    // pub orders_of_actorid: BTreeMap<ActorId, BTreeMap<OrderId, Order>>,

    state.inscribe_indexes.insert(inscribe_io::InscribeIndexes(1), 
    Inscribe { 
        inscribe_type: inscribe_io::InscribeType::Organization, 
        inscribe_index: 1, 
        deployer: msg::source(), 
        tick: "Build on VRAR".to_owned(), 
        max_supply: 1000000000000, 
        total_supply: 0, 
        amt_per_mint: 1000, 
        slogan: "make it to the moon".to_owned(), 
        media: inscribe_io::MediaType::Twitter,
        media_link: "https://x.com/inscirbe".to_owned(), 
        verify: VerifyStatus::None, 
        icon: "https://ipfs.io/icon".to_owned(), 
        frame: "https://ipfs.io/frame".to_owned(), 
        decimals: 0, 
        inscribe_state: inscribe_io::InscribeState::MintStart 
    });
    let id = msg::source();
    let amt:u128 = 1000;

    // pub balances: BTreeMap<InscribeIndexes, BTreeMap<ActorId, u128>>,

    let mut map_balances: BTreeMap<ActorId, u128> = BTreeMap::new();
    map_balances.insert(id, amt);
    state.balances.insert(InscribeIndexes(1), map_balances);

    // pub totalsupply: BTreeMap<InscribeIndexes,u128>,
    let mut map_totalsupply: BTreeMap<InscribeIndexes, u128> = BTreeMap::new();
    state.totalsupply = map_totalsupply;

    // pub inscribes_minted: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    let mut map_actorid_inscribe: BTreeMap<ActorId, BTreeMap<u64, Inscribe>> = BTreeMap::new();
    state.inscribes_minted = map_actorid_inscribe;

    // pub inscribes: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    let mut actors_inscribe: BTreeMap<u64, InscribeIndexes>;
    let mut map_inscribes: BTreeMap<ActorId, BTreeMap<u64, InscribeIndexes>> = BTreeMap::new();
    state.inscribes = map_inscribes;

    // pub mint_times: BTreeMap<InscribeIndexes, MintTimes>,
    let mut map_mint_times: BTreeMap<InscribeIndexes, MintTimes> = BTreeMap::new();
    state.mint_times = map_mint_times;

    // pub all_orders: BTreeMap<OrderId, Order>,
    let mut map_all_orders: BTreeMap<OrderId, Order> = BTreeMap::new();
    state.all_orders = map_all_orders;

    // pub orders_of_actorid: BTreeMap<ActorId, BTreeMap<OrderId, Order>>,
    let mut map_actorid_order: BTreeMap<ActorId, BTreeMap<OrderId, Order>> = BTreeMap::new();
    state.orders_of_actorid = map_actorid_order;

}



#[no_mangle]
extern "C" fn handle() {
    let state = unsafe { INSCRIBEIOSTATES.as_mut().expect("failed to get state as mut") };
    let action: Action = gstd::msg::load().expect("failed to load action");

    match action {
        Action::Deploy { inscribe_data  } => {
            // check inscribe ticks is existing
            let id:ActorId = msg::source();
            let is_deployed = state.deploy(inscribe_data.clone(), id);
            assert_eq!(is_deployed, true);
            msg::reply(Event::DeployEvent { inscribe_data },0).expect("Got error");
        },

        Action::Transfer { inscribe_id, from, to, amt } => {

            let msg_sender = msg::source();

            state.trnsfer(inscribe_id, from, to, amt, msg_sender);
            let _reply = msg::reply("transfer", 0);

            // todo!();
        },
        Action::Mint { inscribe_id  } => {
            let to = msg::source();
            // check inscribe_id is exsiting.
            // assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
            // let mut balances_of_inscribe = state.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            
            // let mut inscribe_of_id = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            // let max_supply = inscribe_of_id.max_supply;
            // let total_supply = inscribe_of_id.total_supply;
            // let amt = inscribe_of_id.amt_per_mint;
            // // check max amt is reach ?

            // assert_eq!(max_supply - (total_supply + amt) >= 0 as u128, true);

            // // check actorid's current amt.

            // let mut cureent_amt = balances_of_inscribe.get_key_value(&to).expect("msg").1.clone();

            // cureent_amt += amt;           

            // balances_of_inscribe.insert(to, cureent_amt);
            // inscribe_of_id.total_supply += amt;

            state.mint(inscribe_id, to);

            let _ = msg::reply(Event::Mint { inscribe_id, to  }, 0);

        },
        Action::Burn { inscribe_id, from, to, amt  } => {
            // check inscribe_id is exsiting.
            assert_eq!(state.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
            let balances = state.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            // get balance from & to and clone it
            let balance_from = balances.get_key_value(&from).expect("msg").1.clone();
            let balance_to = balances.get_key_value(&to).expect("msg").1.clone();

            let inscribe_of_id = state.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
            let max_supply = inscribe_of_id.max_supply;
            let total_supply = inscribe_of_id.total_supply;
            // check max amt is reach ?
            // assert_eq!(max_supply - (total_supply + amt) >= 0 as u128, true);

            // update new amt for from and to
            let is_succes_from = state.update_amt_index_id(inscribe_id, from, balance_from - amt);
            let is_succes_to = state.update_amt_index_id(inscribe_id, to, balance_to + amt);

            assert_eq!(is_succes_from, is_succes_to);
        },
        Action::ListSellOrder { creater, inscribe_id, amt, price } => {
            // check inscribe_id is exsiting.
            let is_contain = state.check_inscribe_by_id(inscribe_id);
            assert_eq!(is_contain, true);

            let is_amt_ok = state.check_amt_of_user(inscribe_id, creater, amt);
            assert_eq!(is_amt_ok, true);

            let msg_sender = msg::source();
            assert_eq!(creater, msg_sender);            

            let market_contract = exec::program_id();

            let order_id:OrderId = state.get_new_order_id();

            // create order info.
            let order_status = OrderStatus::Listed;
            let order = Order {
                creater,
                inscribe_id: inscribe_io::InscribeIndexes(inscribe_id),
                amt,
                price,
                order_status,
                order_type: inscribe_io::OrderType::LimitSell,
            };

            // update && save order info.
            state.update_order_status(order_id.0, order);


            let _ = msg::reply(Event::ListSellOrder { creater, inscribe_id, amt, price }, 0);


        },
        Action::FillBuyOrder {  oriderid } => {
            // When Action == FillBuyOrder, Buyer Send vara to contract, contract send vara to Seller. And Contract send Inscribe to Buyer.
            // orderid is existing ?
            let is_orderid_valid = state.check_order_id_exsiting(oriderid);
            assert_eq!(is_orderid_valid, true);

            // check orderid's status,read orderid's info
            let mut order = state.all_orders.get_key_value(&OrderId(oriderid)).expect("msg").1.clone();
            assert_eq!(order.order_status, OrderStatus::Listed);

            let msg_send_value = msg::value();
            let price = order.price;

            let inscribe_id = order.inscribe_id.0;
            let amt = order.amt;
            let seller = order.creater;
            let buyer = msg::source();

            // get and Check contract id's inscribe amt
            let contract_amt_ok = state.check_amt_of_user(inscribe_id, exec::program_id(), amt);
            assert_eq!(contract_amt_ok, true);

            // transfer vara check
            assert_eq!(price, msg_send_value);
            let seller_value = msg_send_value - 1000000000000;

            // transfer inscribe to buyer: index, amt, from, to.
            state.update_amt_index_id(inscribe_id, buyer, amt);

            // update amt : contract address.
            state.update_amt_index_id(inscribe_id, exec::program_id(), amt);
            assert_eq!(buyer, msg::source());    
            
            // update && save order info in states.
            order.order_status = OrderStatus::Successed;

            // state.all_orders.insert(OrderId(oriderid), order.clone());
            state.update_order_status(oriderid, order);

            // Events of this action
            // we need use reply to send vara to seller
            // let _ = msg::reply("Order Filled {}", msg_send_value);
            let admin = ActorId::from_bs58("1F22iHpizWc2C8vsFtWxy85ne7ucHZzpGs9uX3FSHTzk4Fu".to_owned()).expect("msg");

            let _send = msg::send(seller, "Order filled", seller_value).expect("Send Vara Failed");
            let _send = msg::send(admin, "fee", 1000000000000).expect("Send market fee Failed");
        },
        Action::ListBuyOrder { buyer, inscribe_id, amt, price } => {
            // check inscribe_id is exsiting.
            let is_exsiting = state.check_inscribe_by_id(inscribe_id);
            assert_eq!(true, is_exsiting);
            // check amt of actorid >= amt of user input.
            let user = msg::source();
            let is_amt_ok = state.check_amt_of_user(inscribe_id, user, amt);
            assert_eq!(true, is_amt_ok);

            // generate orderid
            let orderid = state.last_order_id();

            let od = Order{
                creater: msg::source(),
                inscribe_id: InscribeIndexes(inscribe_id),
                amt,
                price,
                order_status: OrderStatus::Listed,
                order_type: OrderType::LimitBuy,
            };

            // check the value of msg sender 
            assert_eq!(msg::value(), price);

            // save infos of order into states.
            let update_oder_info = state.update_order_status(orderid, od);
            assert_eq!(update_oder_info, true);
        },
        
        Action::FillSellOrder { orderid } => {
            // check orderid is exsiting
            let is_order_exsiting = state.all_orders.contains_key(&OrderId(orderid));
            assert_eq!(true, is_order_exsiting);
            // read order
            let order = state.all_orders.get_key_value(&OrderId(orderid)).expect("msg").1.clone();
            // decode Order info.
            let index = order.inscribe_id.clone();
            let amt = order.amt.clone();
            let creator = order.creater.clone();
            let price = order.price.clone();
            let order_type = order.order_type.clone();
            assert_eq!(order_type, OrderType::LimitSell);

            // check actorid: msg::souce() is have this inscribe, and amt is >= order amt
            let user = msg::source();
            let is_have_this_inscribe = state.check_amt_of_user(index.0, user, amt);
            assert_eq!(is_have_this_inscribe, true);
            
            // update infos in states of this inscribe
            let amt_of_buyer = state.balances_map(index.0).get_key_value(&creator).expect("get buyer's inscribe amt error").1.clone();
            let buyer_new_amt = amt_of_buyer + amt;
            state.update_amt_index_id(index.0, creator, buyer_new_amt);

            let amt_of_seller = state.balances_map(index.0).get_key_value(&user).expect("get seller's inscibe amt error").1.clone();
            let seller_new_amt = amt_of_seller - amt;
            state.update_amt_index_id(index.0, user, seller_new_amt);


            // update order type info 
            // order.order_status = OrderStatus::Successed;
            let mut od = order.clone();
            od.order_status = OrderStatus::Successed;
            state.update_order_status(orderid, od.clone());

            // event of sell action.

            // Event::
        },
        Action::CanceleSellOrder { orderid } => {
            // check orderid
            let is_order_exsiting = state.check_order_id_exsiting(orderid);
            assert_eq!(is_order_exsiting, true);
            // check order's status
            let order = state.all_orders.get_key_value(&OrderId(orderid)).expect("msg").1.clone();


            assert_eq!(order.order_status.clone(), OrderStatus::Listed);
            // some action to cancele
            let index = order.inscribe_id.clone();
            let user_amt = state.balances_map(index.0).get_key_value(&order.creater).expect("msg").1.clone();
            state.update_amt_index_id(index.0, order.creater.clone(), user_amt + order.amt);

            // update order status
            let mut od = order.clone();
            od.order_status = OrderStatus::Canceled;
            let is_update_sucess = state.update_order_status(orderid, od.clone());
            assert_eq!(is_update_sucess, true);
        },
        Action::CanceleBuyOrder { orderid } => {
            // check orderid
            let is_order_existing = state.check_order_id_exsiting(orderid);
            assert_eq!(is_order_existing, true);

            // check order's status
            let mut order = state.all_orders.get_key_value(&OrderId(orderid)).expect("msg").1.clone();
            assert_eq!(order.order_status, OrderStatus::Listed);

            // let index = order.inscribe_id;
            let price = order.price.clone();
            let refund = msg::send(order.creater, "CancelBuyOrder", price).expect("msg");

            // update order status
            order.order_status = OrderStatus::Canceled;
            let is_update_sucess = state.update_order_status(orderid, order);
            assert_eq!(is_update_sucess, true);

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
    let state = unsafe { INSCRIBEIOSTATES.as_mut().expect("failed to get state as mut").clone() };

    let reply = match query {

        Query::Whoami => Reply::Whoami(gstd::msg::source()), // all zero addr
        Query::BlockNumber => Reply::BlockNumber(gstd::exec::block_height()),
        Query::BlockTimestamp => Reply::BlockTimestamp(gstd::exec::block_timestamp()),
        Query::ProgramId => Reply::ProgramId(gstd::exec::program_id()),
        Query::MessageId => Reply::MessageId(gstd::msg::id()),
        Query::QueryInscribe(u128) => {
            // Reply::ReplyInscribe(state.inscribe_indexes.get_key_value(&InscribeIndexes).expect("msg").1.clone()),
            let rt = state.inscribe_indexes.get_key_value(&InscribeIndexes(u128)).expect("msg").1.clone();
            Reply::ReplyInscribe(rt)
        }
        // Query::QueryInscribe(_) => todo!(),
        Query::All => {
            Reply::All(state.clone())
        },
        Query::QueryInscribeByActorId(index, s58address) => {
            let actor_amt_map = state.balances.get_key_value(&InscribeIndexes(index)).expect("msg").1.clone();
            let actor: ActorId = ActorId::from_bs58(s58address).expect("get actorid from s58address meet error, please check");

            let amt = actor_amt_map.get_key_value(&actor).expect("msg").1.clone();
            Reply::ReplyInscribeByActorId(amt)
        },
            
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

