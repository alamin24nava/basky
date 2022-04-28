// nav bar show & hidden
$("#toggler").click(function () {
  $(".theme-sidenav-wrap").toggleClass("aside-hide");
  $(".theme-page-content, .theme-header-template").toggleClass(
    "theme-full-screen-expanded"
  );
});
// nav Link active
const activeLink = document.querySelectorAll(".sidenav-link");

function navActiveLink() {
  if (activeLink) {
    activeLink.forEach((i) => i.classList.remove("sidenav-link-active"));
    this.classList.add("sidenav-link-active");
  }
}
activeLink.forEach((i) => i.addEventListener("click", navActiveLink));

// theme input select options
$(".theme-select-input").each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("theme-select-hidden");
  $this.wrap('<div class="theme-select-wrap"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  var $list = $("<ul />", {
    class: "select-options",
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
      });
    $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.hide();
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});

// checkbox Disabled
$(function () {
  $("#flexCheckDisabled").click(function () {
    if ($(this).is(":checked")) {
      $(".form-check-disabled .form-floating").show();
    } else {
      $(".form-check-disabled .form-floating").hide();
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
$(".add-more-field").click(function () {
  $(".add-another-field-wrap").clone().appendTo(".dynamic-another-field");
  $(".dynamic-another-field .add-another-field-wrap").addClass("single remove");
  $(".single .add-more-field").remove();
  $(".single").append(
    '<a href="#" class="remove-field btn-remove-customer">Remove Item</a>'
  );
  $(".dynamic-another-field > .single").attr("class", "remove");

  $(".dynamic-another-field input").each(function () {
    var count = 0;
    var fieldname = $(this).attr("name");
    $(this).attr("name", fieldname + count);
    count++;
  });
});

$(document).on("click", ".remove-field", function (e) {
  $(this).parent(".remove").remove();
  e.preventDefault();
});

// owlCarousel

$(document).ready(function () {
  $(".trusted-customers").owlCarousel({
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
      600: {
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

$(function () {
  $("select").selectpicker();
});
