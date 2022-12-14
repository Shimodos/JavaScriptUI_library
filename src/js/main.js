import $ from './lib/lib';

$('#first').on('click', () => {
	$('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
	$('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
	$('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal title',
		body: 'Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Id expedita cum earum eveniet natus impedit nesciunt commodi. Unde maiores iure aspernatur, eum laudantium. Dolorem cupiditate, soluta ducimus sint, quisquam enim?',
	},
	btns: {
		count: 3,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Данные сохранены');
				}
			],
			[
				'Another btn',
				['btn-warning', 'ml-10'],
				false,
				() => {
					alert('Hello world');
				}
			]
		]
	}
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res));

// $('.wrap').html(
// 	`
// 		<div class="dropdown">
// 			<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
// 			<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
// 				<a href="#" class="dropdown-item">Action</a>
// 				<a href="#" class="dropdown-item">Action #2</a>
// 				<a href="#" class="dropdown-item">Action #3</a>
// 			</div>
// 		</div>
// 	`
// );

// $('.dropdown-toggle').dropdown();