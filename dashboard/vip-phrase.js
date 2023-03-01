const vipRep = nodecg.Replicant("vip-phrase");
$(document).ready(function () {
  NodeCG.waitForReplicants(vipRep).then(() => {
    vipRep.on("change",()=>{
        $('#vip-phrase').attr("placeholder",vipRep.value)
    })
    $('#new-vip-phrase-submit')[0].onclick = function (event) {
      event.preventDefault();
      if(confirm("This should only be done by someone important!!")) {
        const vip = $('#vip-phrase')[0].value;
        vipRep.value = vip
      }
    };
  });
});
