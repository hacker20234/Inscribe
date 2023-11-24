#![no_std]
use core::{usize, fmt::LowerHex};
use codec::{Decode, Encode};
use gstd::{collections::{BTreeMap, HashMap}, MessageId, prelude::*, ActorId};
use scale_info::TypeInfo;
use gmeta::{InOut, Metadata};

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub enum Orderstatus {
    #[default]
    Listed,
    Canceled,
    Successed,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub struct OrderId(u128);
// // <actorid,hashmap<index, orderid>>
// #[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
// pub struct OrdersManager {
//     // orders of every Actorid
//     pub orders: BTreeMap<ActorId, BTreeMap<u64, OrderId>>
// }

// <actorid, hashmap<index, inscribe*>>
// #[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
// pub struct InscribeManager {
//     // orders of every Actorid
//     pub inscribes: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>
// }

// <actorid, hashmap<index, inscribe_minted>>
// #[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
// pub struct InscribeMintManager {
//     // orders of every Actorid
//     pub inscribes_minted: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>
// }

// <inscribe_index，balances<actorid,balance>> => balance -> u128.
// #[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
// pub struct Balances {
//     pub balances: BTreeMap<u128, BTreeMap<ActorId, u128>>
// }



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



#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct Inscribe{
    pub inscribe_type:InscribeType,
    pub inscribe_index: u128,
    pub deployer: ActorId,
    pub tick: String,
    pub max_supply: u128,
    pub supply: u128,
    pub mint_times_limit: u128,
    pub mint_per_actorid: u64,
    pub slogan: String,
    pub media: MediaType,
    pub verify: VerifyStatus,
    pub icon: String,
    pub frame: String,
    pub balances: Vec<(ActorId, u128)>,
    // pub allowances: Vec<(ActorId, Vec<(ActorId, u128)>)>,
    pub decimals: u8,
    pub inscribe_state:InscribeState,
}

#[derive(Clone, Default, Encode, Decode, TypeInfo)]
pub struct InscribeIoStates {
    pub inscribe: BTreeMap<u128, Inscribe>,

    // 
    pub balances: BTreeMap<u128, BTreeMap<ActorId, u128>>,
    pub inscribes_minted: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    // orders of every Actorid
    pub inscribes: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,

    pub orders: BTreeMap<ActorId, BTreeMap<u64, OrderId>>,

}


impl InscribeIoStates {
    pub fn total_inscribes(&mut self) ->u128 {
        let inscribes = self.inscribe.len();
        return inscribes.try_into().unwrap();
    } 
    pub fn reqly_hello() -> gstd::String{

        return "hello".to_owned();
    }

    pub fn reqly_info(&mut self) -> (){

        todo!()    
    }

    pub fn deploy(&mut self) -> bool {
        let deployer = ActorId::from_bs58("1F22iHpizWc2C8vsFtWxy85ne7ucHZzpGs9uX3FSHTzk4Fu".into()).expect("msg");
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
            deployer,
            tick,
            max_supply,
            mint_per_actorid,
            slogan,
            icon,
            frame,
            supply: todo!(),
            balances: todo!(),
            // allowances: todo!(),
            decimals: todo!(),
            inscribe_type: todo!(),
            media: todo!(),
            verify: todo!(),
            inscribe_state: todo!(),
            inscribe_index: todo!(),
            mint_times_limit: todo!(),
        };        

        self.inscribe.insert(1, new_inscribe);
        

        return true;

    }


}

// trade
// 
// #[derive(Debug, Clone, Encode, Decode, TypeInfo)]
// pub enum  {
    
// }

#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Action {
    Deploy {
        // inscribe_id: u64,
        inscribe_data: Inscribe,


    },
    Mint {
        // inscribe_id: which inscribe
        inscribe_id: u64,
        to: ActorId
    },
    Burn {
        inscribe_id: u64,
        from: ActorId,
        to: ActorId,
        amt: u128,
    },
    Transfer {
        inscribe_id: u64,
        from: ActorId,
        to: ActorId,
        amt: u128,
    },
    // Approve {
    //     // transaction_id: u64,
    //     // to: ActorId,
    //     // token_id: TokenId,
    // },
    // Clear {
    //     // transaction_hash: H256,
    // },
    ListSellOrder {
        seller: ActorId,
        inscribe_id: u64,
        amt: u128,
        price: u128,
    },

    CanceleSellOrder {
        orderid: u128,
    },

    Buy {
        buyer: ActorId,
        oriderid: u128,
    },

    ListBuyOrder {
        buyer: ActorId,
        inscribe_id: u64,
        amt: u128,
        price: u128,
    },

    CanceleBuyOrder {
        orderid: u128,
    },

    Sell {
        seller: ActorId,
        orderid: u128,
    },

    UpdateInscribe {
        inscribeid: u64,
        inscribedata: Inscribe,
    }

}



#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Event {
    DeployEvent{},
    TransferEvent {_inscribe_id: u128,_to: ActorId, _amount: u128},
    BalanceOf(ActorId, u128),

    Deploy {

    },
    Mint {
    },
    Burn {
    },
    Transfer {
        _inscribe_id: u128,
        _to: ActorId, 
        _amount: u128
    },
    Approve {
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