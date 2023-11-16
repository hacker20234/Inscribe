#![no_std]
// #![recursion_limit = "256"]

use gstd::{ActorId, ToOwned, exec, msg, prelude::*};
// use gstd::{};
// use inscribe_io::{Query, Reply, Action, Event, InscribeIoStates};
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
    let action: Action = gstd::msg::load().expect("failed to load action");

    match action {
        Action::Deploy {  } => {
            gstd::msg::reply(Event::DeployEvent {},0).expect("Got error");
        },

        Action::Transfer { _inscribe_id, _to, _amount } => {
            todo!();
        },

        // Action::Transfer { _inscribe_id, _to, _amount }
        
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
    };
    gstd::msg::reply(reply, 0).expect("Failed to share state");

}

