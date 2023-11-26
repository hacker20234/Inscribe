#![no_std]
use core::usize;
use codec::{Decode, Encode};
use gstd::{collections::BTreeMap, MessageId, prelude::*, ActorId};
use scale_info::TypeInfo;
use gmeta::{InOut, Metadata};

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub struct Order {
    pub seller: ActorId,
    pub inscribe_id: InscribeIndexes,
    pub amt: u128,
    pub price: u128,
    pub order_status: OrderStatus,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub struct Balances {
    pub balance: BTreeMap<ActorId, u128>
}

// impl Balances {
//     pub fn update(&mut self, id:ActorId, balances:u128) -> Balances{
//         self.balance.insert(id, balances);
//     }
    
// }

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub enum OrderStatus {
    #[default]
    Listed,
    Canceled,
    Successed,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub struct OrderId(pub u128);


#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash, Copy)]
pub enum VerifyStatus {
    #[default]
    None,
    Verified,
    Evildoer,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash, Copy)]
pub enum InscribeType {
    #[default]
    Organization,
    Individual,
    None,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash, Copy)]
pub enum MediaType {
    #[default]
    Twitter,
    Website, 
    Email,
    Other,
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash, Copy)]
pub enum InscribeState {
    #[default]
    Deployed,
    MintStart,
    MintEnd,    
}

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
pub struct MintTimes(pub BTreeMap<ActorId, u64>);


#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash, Copy)]
pub struct InscribeIndexes(pub u128);

#[derive(Default, Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo, Hash)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct Inscribe{
    pub inscribe_type:InscribeType,
    pub inscribe_index: u128,
    pub deployer: ActorId,
    pub tick: String,
    pub max_supply: u128,
    pub total_supply: u128,
    pub amt_per_mint: u128,
    pub slogan: String,
    pub media: MediaType,
    pub media_link: String,
    pub verify: VerifyStatus,
    pub icon: String,
    pub frame: String,
    pub decimals: u8,
    pub inscribe_state:InscribeState,
}


#[derive(Clone, Default, Encode, Decode, TypeInfo)]
pub struct InscribeIoStates {
    // inscribe
    pub inscribe_indexes: BTreeMap<InscribeIndexes, Inscribe>,
    pub balances: BTreeMap<InscribeIndexes, BTreeMap<ActorId, u128>>,
    pub totalsupply: BTreeMap<InscribeIndexes,u128>,
    pub inscribes_minted: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    pub inscribes: BTreeMap<ActorId, BTreeMap<u64, Inscribe>>,
    pub mint_times: BTreeMap<InscribeIndexes, MintTimes>,
    pub all_orders: BTreeMap<OrderId, Order>,
    pub orders_of_actorid: BTreeMap<ActorId, BTreeMap<OrderId, Order>>,
}


impl InscribeIoStates {
    pub fn total_inscribes(&mut self) ->u128 {
        let inscribes = self.inscribe_indexes.len();
        return inscribes.try_into().unwrap();
    } 

    pub fn last_order_id(&mut self) -> OrderId {
        let id = self.all_orders.last_key_value().expect("msg").0.clone();

        return id;
    }

    pub fn insert_order_to_all_orders(&mut self, id: OrderId, order: Order) -> bool {

        self.all_orders.insert(id, order);

        return true;
    }

    pub fn reqly_info(&mut self) -> (){

        todo!()    
    }

    pub fn deploy(&mut self, mut inscribe_data: Inscribe, id:ActorId) -> bool {
        let index: u128 = self.check_last_inscribe_indexes().0 + 1;
        inscribe_data.verify = VerifyStatus::None;
        inscribe_data.inscribe_state = InscribeState::MintStart;
        inscribe_data.total_supply = 0;
        inscribe_data.inscribe_index = index;
        self.inscribe_indexes.insert(InscribeIndexes(index), inscribe_data);

        // init balances for store......
        let amt:u128 = 0;
        let mut map: BTreeMap<ActorId, u128> = BTreeMap::new();
        map.insert(id, amt);
        self.balances.insert(InscribeIndexes(index), map);

        // init totalsupply 
        // let init_value = &inscribe_data.total_supply.clone();
        let mut totalsupply:BTreeMap<InscribeIndexes, u128> = BTreeMap::new();
        totalsupply.insert(InscribeIndexes(index), 0);
    
        return true;
    }

    pub fn check_last_inscribe_indexes(&mut self) -> InscribeIndexes{
        let last_inscribe_indexes = self.inscribe_indexes.last_key_value().expect("check inscribe indexed error").0.to_owned();
        return last_inscribe_indexes;
        // todo!()
    }

    pub fn check_total_inscribes(&mut self) -> u128{
        return u128::MAX;
    }

    pub fn check_inscribe_by_id(&mut self) -> () {
        todo!()
    }

    pub fn mint(&mut self, inscribe_id: u128, to: ActorId) -> bool {
        // check inscribe_id is exsiting.
        assert_eq!(self.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
        let inscribe = self.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
        let max_supply = inscribe.max_supply;
        let total_supply = inscribe.total_supply;
        let amt = inscribe.amt_per_mint;
        assert_eq!(max_supply - (total_supply + amt) >= 0 as u128, true);


        let balances_of_inscribe = self.balances.get_mut(&InscribeIndexes(inscribe_id)).expect("msg");        
        // check max amt is reach ?
        // balances_of_inscribe.insert(to, amt).expect("msg");
        let amts = balances_of_inscribe.get_mut(&to).expect("msg");
        *amts = *amts + amt;



        // check actorid's current amt.

        // let mut cureent_amt = balances_of_inscribe.get_key_value(&to).expect("msg").1.clone();
        // cureent_amt += amt;           
        // balances_of_inscribe.update(to, amt);
        // balances_of_inscribe.to_owned().update(to, amt);
        // balances_of_in

        // balances_of_inscribe.insert(to, cureent_amt);
        // let insert = self.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.insert(to, cureent_amt);
        // let _insert = self.balances.get_mut(&InscribeIndexes(inscribe_id)).expect("msg").insert(to, cureent_amt);
        // inscribe_of_id.total_supply += amt;

        return true;
        
    }

    pub fn burn(&mut self) {
        todo!()
    }

    pub fn trnsfer(&mut self, inscribe_id: u128, from: ActorId, to: ActorId, amt: u128, msg_sender: ActorId) {


        // check inscribe_id is existing
        assert_eq!(self.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);

        // check amt is <= from: actorid's balance.
        // 
        let mut balances_of_inscribe = self.balances.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
        // let balance_of_from = balances_of_inscribe.get_key_value(&from).expect("msg").1.clone();
        // assert_eq!(balance_of_from - amt >= 0 as u128, true);
        // check msg sender is equal from
        // let msg_sender = msg::source();
        assert_eq!(from, msg_sender);
        
        // state.trnsfer(inscribe_id, from, to, amt);
        // let new_balance_of_from = balance_of_from - amt;
        // let new_balance_of_to = amt;
        // balances_of_inscribe.insert(from, new_balance_of_from);
        // balances_of_inscribe.insert(to, amt);
        

        // todo!()
    }

    pub fn list_sell_order(&mut self) {
        todo!()
    }

    pub fn cancele_sell_order(&mut self) {
        todo!()
    }

    pub fn list_buy_order(&mut self) {
        todo!()

    }

    pub fn cancele_buy_order(&mut self){
        todo!()
    }

    pub fn buy(&mut self){
        todo!()
    }

    pub fn sell(&mut self) {
        todo!()
    }

    pub fn update_inscribe(&mut self, index: u128, new_inscribe_data: Inscribe) -> bool {
        self.inscribe_indexes.insert(InscribeIndexes(index), new_inscribe_data);
        return true;
        // todo!()
    }

    pub fn verify_status(&mut self, inscribe_id: u128, msg_sender: ActorId, verifystatus:VerifyStatus) -> bool {
        assert_eq!(self.inscribe_indexes.contains_key(&InscribeIndexes(inscribe_id)), true);
        // check msg sender is admin
        let admin = ActorId::from_bs58("1F22iHpizWc2C8vsFtWxy85ne7ucHZzpGs9uX3FSHTzk4Fu".to_owned()).expect("msg");
        // let msg_sender = msg::source();
        assert_eq!(admin, msg_sender);
        let mut new_inscribe_data: Inscribe = self.inscribe_indexes.get_key_value(&InscribeIndexes(inscribe_id)).expect("msg").1.clone();
        new_inscribe_data.verify = verifystatus.clone();

        self.update_inscribe(inscribe_id, new_inscribe_data);

        // todo!()
        return true;
    }

}


#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Action {
    Deploy {
        // inscribe_id: u64,
        inscribe_data: Inscribe,
    },

    Mint {
        // inscribe_id: which inscribe
        inscribe_id: u128,
        // to: ActorId
    },

    Burn {
        inscribe_id: u128,
        from: ActorId,
        to: ActorId,
        amt: u128,
    },

    Transfer {
        inscribe_id: u128,
        from: ActorId,
        to: ActorId,
        amt: u128,
    },
    ListSellOrder {
        seller: ActorId,
        inscribe_id: u128,
        amt: u128,
        price: u128,
    },

    CanceleSellOrder {
        orderid: u128,
    },

    Buy {
        // buyer: ActorId,
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
        inscribe_id: u128,
        inscribedata: Inscribe,
    },

    Verify {
        inscribe_id: u128,
        verifystatus: VerifyStatus,
    }

}



#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Event {
    DeployEvent{inscribe_data: Inscribe},
    TransferEvent {_inscribe_id: u128,_to: ActorId, _amount: u128},
    BalanceOf(ActorId, u128),

    Deploy {

    },
    Mint {
        inscribe_id: u128, 
        to:ActorId,
    },
    Burn {
    },
    Transfer {
        _inscribe_id: u128,
        _to: ActorId, 
        _amount: u128
    },
    ListSellOrder {
        seller:ActorId, 
        inscribe_id: u128,
        amt: u128,
        price:u128,
    },

    UpdateInscribe {
        inscribe_id: u128,
        new_inscribe_data: Inscribe,
    },

    Verify {
        inscribe_id: u128,
        verifystatus: VerifyStatus
    }

    // Approve {
    // },
}



#[derive(Debug, Clone, Encode, Decode, TypeInfo)]
pub enum Query {
    All,

    QueryInscribe(u128),
    // InscribeInfoByIndex(u128),
    // InscribesOfActorId,
    // BalanceOf(ActorId, u128),
    // Inscribeowner,
    // Inscribestick,
    // InscribesMaxSupply,
    // InscribeTotalLimit,
    // InscribeMintPerActorid,
    // InscribeSlogan,
    // InscribeSocialLink,
    // InscribeIconLink,
    // InscribeFrame,
    // InscribeSupply,
    // InscribeBalances,
    // InscribeAllowances,
    // InscribeDecimals,
    // InscribeVerifyStatus,
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
    All(InscribeIoStates),
    ReplyInscribe(Inscribe),

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