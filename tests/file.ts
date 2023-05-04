const _const = "some const";
let _let = "some let";

_let = "2";

export default function html(strings: string[]) {
	return { strings };
}

new (function () {
	{
		const fn = () => {};

		fn();
	}
	return;
})();
