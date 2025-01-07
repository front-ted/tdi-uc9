$(document).ready(function () {
  $("#modalPregos").on("show.bs.modal", function () {
    $(".btn-pregos").addClass("btn-pregos-visitado");
  });
  $("#modalGrampos").on("show.bs.modal", function () {
    $(".btn-grampos").addClass("btn-grampos-visitado");
  });
  $("#modalRebites").on("show.bs.modal", function () {
    $(".btn-rebites").addClass("btn-rebites-visitado");
  });
  $("#modalDobradicas").on("show.bs.modal", function () {
    $(".btn-dobradicas").addClass("btn-dobradicas-visto");
  });
  $("#modalParafusos").on("show.bs.modal", function () {
    $(".btn-parafusos").addClass("btn-parafusos-visto");
  });
  $("#modalCorredicas").on("show.bs.modal", function () {
    $(".btn-corredicas").addClass("btn-corredicas-visto");
  });
  $("#modalPuxadores").on("show.bs.modal", function () {
    $(".btn-puxadores").addClass("btn-puxadores-visto");
  });
  $("#modalPistoes").on("show.bs.modal", function () {
    $(".btn-pistoes").addClass("btn-pistoes-visto");
  });
  $("#modalTrilhos").on("show.bs.modal", function () {
    $(".btn-trilhos").addClass("btn-trilhos-visto");
  });
});
