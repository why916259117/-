//Vue对象
var vm = new Vue({
	//作用域
	el: "#indexBody",
	//声明
	data: {
		Num:"",
	},
	//方法
	methods: {

	},
	//检测
	watch: {

	},
	//计算
	computed: {

	},
	//过滤
	filters: {
		//过滤前面为0的数据
		noZero: function(value) {
			if(!value) return ''
			value = value.toString();
			return Number(value);
		},
	}
});