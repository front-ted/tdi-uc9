//funcao q verifica qual item do gaitinha esta selecionado para alterar o css
$(document).ready(function () {
  $("#accordion").on("show.bs.collapse", function (e) {
    $(e.target).prev(".panel-heading").addClass("panel-expanded");
  });

  $("#accordion").on("hide.bs.collapse", function (e) {
    $(e.target).prev(".panel-heading").removeClass("panel-expanded");
  });

  $("#accordionConcorrencia").on("show.bs.collapse", function (e) {
    $(e.target).prev(".panel-heading").addClass("panel-expanded");
  });

  $("#accordionConcorrencia").on("hide.bs.collapse", function (e) {
    $(e.target).prev(".panel-heading").removeClass("panel-expanded");
  });
});
