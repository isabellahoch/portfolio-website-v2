from pymongo import MongoClient

MONGODB_URI = "mongodb://admin:chocolatemousse1@ds133152.mlab.com:33152/uhsbakingclub"
client = MongoClient(MONGODB_URI, connectTimeOutMS=30000)
db = client.get_default_database()
# db = client.admin