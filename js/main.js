let writeUsButton = document.querySelector("#write-us-button");
let writeUsForm = document.querySelector(".write-us-wrap");
writeUsButton.addEventListener('click', function(){
  writeUsForm.style.display = "flex";
  document.body.style.overflow = 'hidden';
  let writeUsClose = document.querySelector("#write-us-close");
  writeUsClose.addEventListener('click',function(){
    writeUsForm.style.display="none";
    document.body.style.overflow = 'auto';

  })
})