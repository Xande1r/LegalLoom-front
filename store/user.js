export default{
	namespaced:true,
	state:()=>({
		role:uni.getStorageSync('role'),
	}),
	mutations:{
		changeRoles(state,role)
		{
			state.role = role;
			uni.setStorageSync('role',role);
		}
	},
	getters:{
		
	}
}