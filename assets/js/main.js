(function ($) {
  'use strict';
  // nav Link active
  const activeLink = document.querySelectorAll('.nav-link');

  function navActiveLink() {
    if (activeLink) {
      activeLink.forEach((i) => i.classList.remove('active'));
      this.classList.add('active');
    }
  }
  activeLink.forEach((i) => i.addEventListener('click', navActiveLink));

  // theme input select options
  $('.theme-select-input').each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children('option').length;

    $this.addClass('theme-select-hidden');
    $this.wrap('<div class="theme-select-wrap"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      class: 'select-options',
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val(),
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active')
        .not(this)
        .each(function () {
          $(this).removeClass('active').next('ul.select-options').hide();
        });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });

  // checkbox Disabled
  $(function () {
    $('#flexCheckDisabled').click(function () {
      if ($(this).is(':checked')) {
        $('.form-check-disabled .form-floating').show();
      } else {
        $('.form-check-disabled .form-floating').hide();
      }
    });
  });
  // checkbox Enabled
  // $(function() {
  //     $("#flexCheckEnabled").click(function() {
  //         let enableMaster = $(".form-check");
  //         if ($(this).is(":checked")) {
  //             $(".form-floating").show();
  //             enableMaster.addClass('form-check-enabled');
  //             enableMaster.removeClass('form-check-disabled');
  //         } else {
  //             $(".form-floating").hide();
  //             enableMaster.addClass('form-check-disabled');
  //             enableMaster.removeClass('form-check-enabled');
  //         }
  //     });
  // });

  // add more field
  // $(".add-more-field").click(function () {
  //   $(".add-another-field-wrap").clone().appendTo(".dynamic-another-field");
  //   $(".dynamic-another-field .add-another-field-wrap").addClass(
  //     "single remove"
  //   );
  //   $(".single .add-more-field").remove();
  //   $(".single").append(
  //     '<a href="#" class="remove-field btn-remove-customer">Remove Item</a>'
  //   );
  //   $(".dynamic-another-field > .single").attr("class", "remove");

  //   $(".dynamic-another-field input").each(function () {
  //     var count = 0;
  //     var fieldname = $(this).attr("name");
  //     $(this).attr("name", fieldname + count);
  //     count++;
  //   });
  // });

  // $(document).on("click", ".remove-field", function (e) {
  //   $(this).parent(".remove").remove();
  //   e.preventDefault();
  // });

  // owlCarousel
  // our customar (home page)
  $(document).ready(function () {
    $('.trusted-customers').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        768: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 2,
          nav: true,
          loop: false,
        },
      },
    });
  });
  // trade margin page
  $(document).ready(function () {
    $('.trade-margin-curr').owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        768: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  });

  // Header Sticky
  // $(window).on("scroll", function () {
  //   if ($(this).scrollTop() > 120) {
  //     $(".navbar-area").addClass("is-sticky");
  //   } else {
  //     $(".navbar-area").removeClass("is-sticky");
  //   }
  // });

  // Mean Menu
  // jQuery(".mean-menu").meanmenu({
  //   meanScreenWidth: "991",
  // });

  // Select Country js
  $('#country_selector').countrySelect({
    // defaultCountry: "jp",
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // responsiveDropdown: true,
    preferredCountries: ['bd', 'gb', 'us'],
  });

  /* Bootstrap 5 JS included */
  /* vanillajs-datepicker 1.1.4 JS included */

  const getDatePickerTitle = (elem) => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
      titleText = label.textContent;
    } else {
      titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
  };

  const elems = document.querySelectorAll('.datepicker_input');
  for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
      format: 'dd/mm/yyyy', // UK format
      title: getDatePickerTitle(elem),
    });
  }

  Highcharts.chart('products_statistics', {
    chart: {
      type: 'column',
      height: '85px',
      borderRadius: 5,
    },
    title: false,
    xAxis: {
      show: false,
    },
    legend: {
      enabled: false,
      itemStyle: {
        color: '#676B79',
        fontSize: '14px',
        fontWeight: '400',
      },

      itemHoverStyle: {
        color: '#0171F5',
      },
    },
    yAxis: {
      min: 0,
      title: false,
      gridLineColor: '#DBDBDB',
      gridLineDashStyle: 'longdash',
      gridLineWidth: 0.5,
      labels: {
        style: {
          color: '#C4C4C4',
          fontSize: '14px',
          fontWeight: '400',
        },
      },
    },

    tooltip: {
      className: 'heighChartTooltip',
      headerFormat:
        '<h6 className="tooltipTitle">{point.key}</h6><ul className="chatTooltip">',
      pointFormat:
        '<li><span style="color:{series.color};padding:0">{series.name}: </span>' +
        '<span style="padding:0"><b>{point.y:.1f} $</b></span></li>',
      footerFormat: '</ul>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        grouping: false,
        borderRadiusTopLeft: 5,
        borderRadiusTopRight: 5,
      },
    },
    colors: ['#F05C26'],
    series: [
      {
        name: 'Sales',
        data: [1401, 1450, 3540, 4501, 1450],
        shadow: {
          color: 'rgba(103, 103, 103, 0.25)',
          offsetX: 3,
          offsetY: 5,
          opacity: '.1',
          width: 5,
        },
      },
    ],
  });

  Highcharts.chart('impressions', {
    chart: {
      type: 'line',
      height: '200px',
      borderRadius: 5,
    },
    title: false,
    xAxis: {
      gridLineColor: '#DCE0EE',
      gridLineDashStyle: 'solid',
      gridLineWidth: 0,
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      crosshair: true,
      labels: {
        style: {
          color: '#C4C4C4',
          fontSize: '14px',
          fontWeight: '400',
        },
      },
      lineColor: '#fff',
      lineWidth: 1,
    },
    legend: {
      enabled: false,
      itemStyle: {
        color: '#676B79',
        fontSize: '14px',
        fontWeight: '400',
      },

      itemHoverStyle: {
        color: '#0171F5',
      },
    },
    yAxis: {
      min: 0,
      title: false,
      gridLineColor: '#DBDBDB',
      gridLineDashStyle: 'longdash',
      gridLineWidth: 0.5,
      labels: {
        style: {
          color: '#C4C4C4',
          fontSize: '14px',
          fontWeight: '400',
        },
      },
    },

    tooltip: {
      className: 'heighChartTooltip',
      headerFormat:
        '<h6 className="tooltipTitle">{point.key}</h6><ul className="chatTooltip">',
      pointFormat:
        '<li><span style="color:{series.color};padding:0">{series.name}: </span>' +
        '<span style="padding:0"><b>{point.y:.1f} $</b></span></li>',
      footerFormat: '</ul>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        grouping: false,
      },
    },
    colors: ['#20B038', '#F05C26'],
    series: [
      {
        name: 'Impressions 1',
        data: [
          1401, 1450, 3540, 4501, 1450, 6540, 1450, 6541, 3654, 3654, 3245,
          4123,
        ],
        shadow: {
          color: 'rgba(103, 103, 103, 0.25)',
          offsetX: 3,
          offsetY: 5,
          opacity: '.1',
          width: 5,
        },
      },
    ],
  });

  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
    $('.responsive-menu').toggleClass('active');
  });
})(jQuery);
