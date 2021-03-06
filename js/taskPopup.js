
$('#newPopup').modal()

function openNewPopup() {
	$('#newPopup').modal()
}

function openTableDesc(that) {
	$(that).toggleClass('open')
	$(that).next().slideToggle()
}


function changeTypeTask(type, that) {
	$('.taskPopup-top-btn').removeClass('active')
	$(that).toggleClass('active')
	$('.taskPopup-center-table tr').hide()
	$('.taskPopup-center-table tr[data-type="' + type + '"]').show("slow")

	switch (type) {
		case 'history':
			$('.taskPopup-center-table tr[data-type]').show("slow");
		default:
			break;
	}
}

function changeOptionType(that, type) {
	$('.taskPopup-top-action').removeClass('active')
	$(that).addClass('active')
	$('.taskPopup-center-inner').removeClass('active')
	$('.taskPopup-center-inner[data-center="' + type + '"]').addClass('active')
	$('.taskPopup-right-inner').removeClass('active')
	$('.taskPopup-right-inner[data-right="' + type + '"]').addClass('active')
	if (type === 'comments') {
		$('.taskPopup-center-inner[data-center="table"]').addClass('active')
	}
}

function changeCreateType(that, type) {
	$('.taskPopup-create-item').removeClass('active')
	$(that).addClass('active')
	$('.taskPopup-create-task').removeClass('active')
	$('.taskPopup-create-task[data-task="' + type + '"]').addClass('active')
}

function changeClarification(that) {
	if ($(that).hasClass('showFields')) {
		$('.fields-clarification').show()
	} else {
		$('.fields-clarification').hide()
	}
}
function toggleActiveClass(that) {
	$(that).toggleClass('_active');
	$(that).siblings('.taskPopup-comments-send').toggleClass('active');
}

function showWarningsDetail(that) {
	$(that).hide();
	$(that).closest('.js_error_top').find('.detail-hide').show()
	$(that).closest('.js_error_body').find('.taskPopup-error-text-detail').slideToggle()
}

function hideWarningsDetail(that) {
	$(that).hide();
	$(that).closest('.js_error_top').find('.detail-show').show()
	$(that).closest('.js_error_body').find('.taskPopup-error-text-detail').slideToggle()
}

function changeForwarding(that) {
	if ($(that).hasClass('showForwarding')) {
		$('.fields-forwarding').show()
	} else {
		$('.fields-forwarding').hide()
	}
}

function accordingInfo(that) {
	$(that.querySelector('.accordion-title-ico')).toggleClass('_active')
	$(that.closest('.according-item').querySelector('.accordion-content')).slideToggle()
	//  .toggleClass('_active')
}

function icoCalendar(thatClass){
	if($('.daterangepicker').is(":visible")){
			return
	}
	let curClass = "." + thatClass;

	setTimeout(function () {
			$(curClass).click()
	}, 10)

}


var templateText = document.querySelector('.taskPopup-create-task-tooltype-text');

tippy('.js_popper_task', {
	content: templateText.innerHTML,
	animation: 'fade',
	arrow: true,
	maxWidth: 708,
	placement: 'bottom',
	delay: [100, 1000],
});

$(document).ready(function () {
	let today = moment()
	let lastDay = moment(today.format('MM/DD/YYYY'), "MM/DD/YYYY").add(10, 'days');

	var picker = $('.daterange-input').daterangepicker({
		"singleDatePicker": true,
		"linkedCalendars": false,
		"autoUpdateInput": true,
		"showCustomRangeLabel": false,
		"autoApply": true,
		"startDate": today.format('MM/DD/YYYY'),
		"minDate": today.format('MM/DD/YYYY'),
		"maxDate": lastDay.format('MM/DD/YYYY'),

		locale: {
			"format": 'MM/DD/YYYY',
			"applyLabel": "????",
			"cancelLabel": "????????????",
			"fromLabel": "????",
			"toLabel": "????",
			"customRangeLabel": "????????????????????????",
			"daysOfWeek": [
				"????",
				"????",
				"????",
				"????",
				"????",
				"????",
				"????"
			],
			"monthNames": [
				"????????????",
				"??????????????",
				"????????",
				"????????????",
				"??????",
				"????????",
				"????????",
				"????????????",
				"????????????????",
				"??????????????",
				"????????????",
				"??????????????"
			],
			"firstDay": 1
		}
	});

	$('.daterange-input').val('')

	$('.daterangepicker').addClass('no-active')

	picker.on('apply.daterangepicker', function (ev, picker) {
		let money = $('.daterange-input[data-money]').attr('data-money')

		$('.daterangepicker').removeClass('no-active')
		$('.daterange-input').val(picker.startDate.format('DD/MM/YYYY'))

		if (today.format('YYYY-MM-DD') === picker.startDate.format('YYYY-MM-DD')) {
			$('.select-money').html(money)
		} else {
			let diff = picker.startDate.diff(today, 'day') + 2
			$('.select-money').html(diff * parseInt(money))
		}

	});

	var picker2 = $('.daterange-input-2').daterangepicker({
		"singleDatePicker": true,
		"linkedCalendars": false,
		"autoUpdateInput": true,
		"showCustomRangeLabel": false,
		"autoApply": true,
		"startDate": today.format('MM/DD/YYYY'),
		"minDate": today.format('MM/DD/YYYY'),
		"maxDate": lastDay.format('MM/DD/YYYY'),

		locale: {
			"format": 'MM/DD/YYYY',
			"applyLabel": "????",
			"cancelLabel": "????????????",
			"fromLabel": "????",
			"toLabel": "????",
			"customRangeLabel": "????????????????????????",
			"daysOfWeek": [
				"????",
				"????",
				"????",
				"????",
				"????",
				"????",
				"????"
			],
			"monthNames": [
				"????????????",
				"??????????????",
				"????????",
				"????????????",
				"??????",
				"????????",
				"????????",
				"????????????",
				"????????????????",
				"??????????????",
				"????????????",
				"??????????????"
			],
			"firstDay": 1
		}
	});

	$('.taskPopup-select').select2();

	$('input[type="radio"][name="??larification"]').click(function () {

	})

	$('#??larification3').click(function () {

	})

	// according left block

});
