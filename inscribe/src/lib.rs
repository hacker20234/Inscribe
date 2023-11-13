#![no_std]
use gstd::{exec, msg, prelude::*, ActorId};
use vara_bets_io::{VaraBetsStates,Action,Event,Query,Reply, BetsRoundState};

#[no_mangle]
extern "C" fn init() {

    unsafe { VARABETSSTATES = Some(VaraBetsStates::default());
            BETSROUNDSTATE = gstd::Some(BetsRoundState::GameEnded);
            assert_eq!(BetsRoundState::GameEnded, BETSROUNDSTATE.unwrap());
     };

}

#[no_mangle]
extern "C" fn handle() {

    let state = unsafe { VARABETSSTATES.as_mut().expect("failed to get state as mut") };
    let action: Action = gstd::msg::load().expect("failed to load action");
    match action {
        Action::WithDraw {} => {            
            let balance: u128 = exec::value_available();
            let admin: ActorId = ActorId::from_bs58("kGfn1RrSZJkTrNbNjpQbvWNE5Szsr3tsTFtmYExrBHFCPLjPy".to_owned()).expect("Get Admin Address Error.");
            assert_eq!(admin, msg::source());

            let _ = gstd::msg::send(msg::source(), "Withdraw Balance.", balance);
        },
    }


}



#[no_mangle]

extern "C" fn state() {
    let query = gstd::msg::load().expect("failed to load query");
    let mut state: VaraBetsStates = unsafe { VARABETSSTATES.as_ref().expect("failed to get contract state").clone() };

    // let mut GA
    let reply = match query {
        Query::All => Reply::All(state.clone()),
        Query::Rounds() => Reply::Rounds(state.current_rounds()),
        Query::Whoami => Reply::Whoami(gstd::msg::source()), // all zero addr
        Query::BlockNumber => Reply::BlockNumber(gstd::exec::block_height()),
        Query::BlockTimestamp => Reply::BlockTimestamp(gstd::exec::block_timestamp()),
        Query::ProgramId => Reply::ProgramId(gstd::exec::program_id()),
        Query::MessageId => Reply::MessageId(gstd::msg::id()),
        Query::Title() => Reply::Title(state.last_round().1),
        Query::Last() => Reply::Last(state.last_round().0, state.last_round().1),
        Query::BetsRoundState() => Reply::BetsRoundState(unsafe { BETSROUNDSTATE.clone() }),
        Query::HashInserted() => Reply::HashInserted(state.inquire_current_card_hash().0, state.inquire_current_card_hash().1),
        Query::Beted() => todo!(),
        Query::CardsInserted() => Reply::CardsInserted(state.4.last_key_value().expect("msg").1.2.clone()),
        Query::DistributedRewards() => todo!(),
        Query::AllBets() => Reply::AllBets(state.3),
    };
    gstd::msg::reply(reply, 0).expect("Failed to share state");

}

