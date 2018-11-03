import requests
import pymongo
from db_connect import db

class WebPost:

	def __init__(self, post_path):
		self.path = post_path

	def get_info(self, required_fields=False):
		if not required_fields:
			db_result = db.Blog.find_one({"path":self.path})
		else:
			db_result = db.Blog.find_one({"path":self.path}, required_fields)
		return db_result

class WebPostFromID:

	def __init__(self, post_id):
		self.id = post_id

	def get_info(self, required_fields=False):
		if not required_fields:
			db_result = db.Blog.find_one({"id":self.id})
		else:
			db_result = db.Blog.find_one({"id":self.id}, required_fields)
		return db_result

class WebMember:

	def __init__(self, member_id):
		self.id = member_id

	def get_info(self, required_fields=False):
		if not required_fields:
			db_result = db.Members.find_one({"id":self.id})
		else:
			db_result = db.Members.find_one({"id":self.id}, required_fields)
		if not db_result:
			db_result = db.Members.find_one({"email":self.id})
		return db_result