import pymongo
from bson.objectid import ObjectId



class KisserNotExist(Exception):
    pass


class KisserAlreadyExist(Exception):
    pass


class MongoDal:

    def __init__(self):
        self.mongo_client = pymongo.MongoClient("mongodb://mongo:27017/")
        self.mongo_db = self.mongo_client['local']
        self.kissers_collection = self.mongo_db['persons']
        self.kissers_collection.create_index('persons', unique=False)
        self.kisses_collection = self.mongo_db['kisses']
        self.kisses_collection.create_index('persons', unique=False)

    def add_kisser(self, kisser_name: str, kisser_sex: str):
        if len(list(self.kissers_collection.find({"name": kisser_name}))) > 0:
            raise KisserAlreadyExist(f"The kisser {kisser_name} is already in the hub!")
        self.kissers_collection.insert_one({"data": {"label": kisser_name}, "gender": kisser_sex})

    def add_kiss(self, kisser1_id: str, kisser2_id: str):
        kisser1_id = self.kissers_collection.find_one({"_id": ObjectId(kisser1_id)})
        if len(list(kisser1_id)) == 0:
            raise KisserNotExist(f"{kisser1_id} not exist!")
        kisser2_id = self.kissers_collection.find_one({"_id": ObjectId(kisser2_id)})
        if len(list(kisser2_id)) == 0:
            raise KisserNotExist(f"{kisser2_id} not exist!")
        self.kisses_collection.insert_one({"kissers": [kisser1_id, kisser2_id]})

    def get_kisser_id_by_name(self, kisser_name: str):
        kisser_obj = self.kissers_collection.find_one({"data.label": kisser_name})
        if kisser_obj and len(list(kisser_obj)) == 0:
            raise KisserNotExist(f"{kisser_name} not exist!")
        return str(kisser_obj["_id"])