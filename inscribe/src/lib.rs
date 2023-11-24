#![no_std]

use gstd::{ActorId, ToOwned, exec, msg, prelude::*};
use inscribe_io::{Query, Reply, Action, Event, InscribeIoStates};

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
    state.inscribe.contains_key(&0);
    let _block_number = exec::block_height();
    let _sender = msg::source();
    let action: Action = gstd::msg::load().expect("failed to load action");

    match action {
        Action::Deploy { inscribe_data  } => {
            // check inscribe ticks is existing
            // todo.

            let inscribedata = inscribe_data;
            inscribedata.icon = todo!();
            gstd::msg::reply(Event::DeployEvent {},0).expect("Got error");
        },

        Action::Transfer { inscribe_id, from, to, amt } => {
            // check inscribe_id is existing
            // todo

            // check amt is <= from: actorid's balance.
            todo!();
        },
        Action::Mint { inscribe_id, to  } => {
            // check inscribe_id is exsiting.
            // check max amt is reach
            // check actorid max mint is reach

            // mint action.
            todo!()
        },
        Action::Burn { inscribe_id, from, to, amt  } => {
            // check inscribe_id is exsiting.
            // check amt of actorid
            // check to actorid.
            todo!()
        },
        Action::ListSellOrder { seller, inscribe_id, amt, price } => {
            // check inscribe_id is exsiting.
            // check amt of actorid
            // transfer something to contract 
            // update balance of user and contract.
            // generate orderid
            // save infos of order into states.

            todo!()
        },
        Action::Buy { buyer, oriderid } => {
            // check orderid's status
            // read orderid's info
            // transfer vara to seller
            // transfer inscribe to buyer
            // update inscribe info in states.

            // Events of this action
            todo!()
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
        Action::UpdateInscribe { inscribeid, inscribedata } => {
            // check inscribe id
            // check msg sender is owner
            // new infos.
            // update action.
        },
        // Action::Approve {  } => todo!(),
        // Action::Clear {  } => todo!(),        
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
        Query::All => todo!(),
        Query::Inscribes => Reply::Inscribes(100),
        Query::InscribesOfActorId => Reply::InscribesOfActorId(ActorId::from_bs58("16CkY8WrzVREYNSvMJKd1nLQ2S8bjGbhoYCE95thV2CqSSXX".to_owned()).expect("msg")),
        Query::BalanceOf(_, _) => todo!(),
        Query::InscribeInfoByIndex(_) => todo!(),
        Query::Inscribeowner => todo!(),
        Query::Inscribestick => todo!(),
        Query::InscribesMaxSupply => todo!(),
        Query::InscribeTotalLimit => todo!(),
        Query::InscribeMintPerActorid => todo!(),
        Query::InscribeSlogan => todo!(),
        Query::InscribeSocialLink => todo!(),
        Query::InscribeIconLink => todo!(),
        Query::InscribeFrame => todo!(),
        Query::InscribeSupply => todo!(),
        Query::InscribeBalances => todo!(),
        Query::InscribeAllowances => todo!(),
        Query::InscribeDecimals => todo!(),
        Query::InscribeVerifyStatus => todo!(),
    };
    gstd::msg::reply(reply, 0).expect("Failed to share state");

}

