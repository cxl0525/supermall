import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: '搜索coderwhy',
		timeout: 5000
	})
	// 拦截器
	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err)
	})

	return instance(config)
}
