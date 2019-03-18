exports.mysql = function(){
	return {
		HOST:'127.0.0.1',
		USER:'root',
		PSWD:'123456',
		DB:'tdkdk_game',  //需要修改
		PORT:3306,
	}
}

exports.port = 12580;

exports.users = function(){
	return {
		HOST:'localhost',
		PORT:12581,
		GET_PATH:'/get_user_info',
		ADD_PATH:'/add_user_gems',
		SAFE:false,		
	}
}