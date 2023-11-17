#![no_std]
use core::usize;
use codec::{Decode, Encode};
use gstd::{collections::BTreeMap, MessageId};
use gstd::{prelude::*, ActorId};
use scale_info::TypeInfo;
use gmeta::{InOut, Metadata};


#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub enum VerifyStatus {
    #[default]
    Normal,
    Verified,
    Evildoer,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub enum InscribeType {
    #[default]
    Organization,
    Individual,
    None,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub enum MediaType {
    #[default]
    Twitter,
    Website, 
    Email,
    Other,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub enum InscribeState {
    #[default]
    Deployed,
    MintStart,
    MintEnd,    
}

// #[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
// pub struct InscribeId{
//     pub TokenId: u128,
// }



#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct Inscribe{
    pub inscribe_type:InscribeType,
    pub owner: ActorId,
    pub tick: String,
    pub max_supply: u128,
    pub supply: u128,
    pub limit: u128,
    pub mint_per_actorid: u64,
    pub slogan: String,
    pub media: MediaType,
    pub verify: VerifyStatus,
    pub icon: String,
    pub frame: String,
    pub balances: Vec<(ActorId, u128)>,
    pub allowances: Vec<(ActorId, Vec<(ActorId, u128)>)>,
    pub decimals: u8,
    pub inscribe_state:InscribeState,
}

#[derive(Clone, Default, Encode, Decode, TypeInfo)]
pub struct InscribeIoStates {
    pub inscribe: BTreeMap<u128, Inscribe>,
}

    // // use to ...
    // pub BTreeMap<u64, ActorId>, 

impl InscribeIoStates {
    pub fn reqly_hello() -> gstd::String{

        return "hello".to_owned();
    }

    pub fn deploy(&mut self) -> bool {
        let owner = ActorId::from_bs58("1F22iHpizWc2C8vsFtWxy85ne7ucHZzpGs9uX3FSHTzk4Fu".into()).expect("msg");
        let tick = String::from("tick value");
        let max_supply = 100;
        let limit = 50;
        let mint_per_actorid = 10;
        let slogan = String::from("slogan value");
        let media = String::from("social value");
        // let isverify = true;
        let icon = String::from("icon value");
        let frame = String::from("frame value");

        let new_inscribe = Inscribe {
            owner,
            tick,
            max_supply,
            limit,
            mint_per_actorid,
            slogan,
            icon,
            frame,
            supply: todo!(),
            balances: todo!(),
            allowances: todo!(),
            decimals: todo!(),
            inscribe_type: todo!(),
            media: todo!(),
            verify: todo!(),
            inscribe_state: todo!(),
        };        

        self.inscribe.insert(1, new_inscribe);
        

        return true;

    }


}


// pub enum InscribeAction {
//     Deploy {

//     },
//     Mint {
//         // transaction_id: u64,
//         // to: ActorId,
//         // token_id: TokenId,
//     },
//     Burn {
//         // transaction_id: u64,
//         // token_id: TokenId,
//     },
//     Transfer {
//         // transaction_id: u64,
//         // to: ActorId,
//         // token_id: TokenId,
//     },
//     Approve {
//         // transaction_id: u64,
//         // to: ActorId,
//         // token_id: TokenId,
//     },
//     Clear {
//         // transaction_hash: H256,
//     },
// }

#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Action {
    // GameStop { code: String, url: String },
    Deploy {

    },
    Mint {
        // transaction_id: u64,
        // to: ActorId,
        // token_id: TokenId,
    },
    Burn {
        // transaction_id: u64,
        // token_id: TokenId,
    },
    Transfer {
        _inscribe_id: u128,
        _to: ActorId, 
        _amount: u128
    },
    Approve {
        // transaction_id: u64,
        // to: ActorId,
        // token_id: TokenId,
    },
    Clear {
        // transaction_hash: H256,
    },


}



#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Event {
    DeployEvent{},
    TransferEvent {_inscribe_id: u128,_to: ActorId, _amount: u128},
    BalanceOf(ActorId, u128),

    Deploy {

    },
    Mint {
        // transaction_id: u64,
        // to: ActorId,
        // token_id: TokenId,
    },
    Burn {
        // transaction_id: u64,
        // token_id: TokenId,
    },
    Transfer {
        _inscribe_id: u128,
        _to: ActorId, 
        _amount: u128
    },
    Approve {
        // transaction_id: u64,
        // to: ActorId,
        // token_id: TokenId,
    },
    Clear {
        // transaction_hash: H256,
    },
}



#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Query {
    All,
    Inscribes,
    InscribeInfoByIndex(u128),
    InscribesOfActorId,
    BalanceOf(ActorId, u128),
    Inscribeowner,
    Inscribestick,
    InscribesMaxSupply,
    InscribeTotalLimit,
    InscribeMintPerActorid,
    InscribeSlogan,
    InscribeSocialLink,
    InscribeIconLink,
    InscribeFrame,
    InscribeSupply,
    InscribeBalances,
    InscribeAllowances,
    InscribeDecimals,
    InscribeVerifyStatus,
    BlockNumber,
    BlockTimestamp,
    ProgramId,
    MessageId,
    Whoami,

}

// impl Query {
    
// }

#[derive(Encode, Decode, TypeInfo)]
pub enum Reply {
    All(),
    Inscribes(u128),
    InscribeInfoByIndex(Inscribe),
    InscribesOfActorId(ActorId),
    // retrun balance of address Inscribes amount.
    BalanceOf(ActorId, u128, u128),
    // Url(Option<String>),
    Whoami(ActorId),
    BlockNumber(u32),
    BlockTimestamp(u64),
    ProgramId(ActorId),
    MessageId(MessageId),
}


pub struct ProgramMetadata;

/// TODO: 0️⃣ Copy `Metadata` from the first lesson and push changes to the master branch
impl Metadata for ProgramMetadata {
    type Init = ();
    type Handle = InOut<Action, Event>;
    type State = InOut<Query, Reply>;
    type Reply = ();
    type Others = ();
    type Signal = ();
}