document.getElementById("contact").addEventListener("click", function(){
    const popup = document.createElement("div");
    popup.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;
    `;
    popup.innerHTML = `
      <div style="background:#fff;padding:20px;border-radius:10px;text-align:center">
        <p>01020625735</p>
        <button onclick="location.href='https://api.whatsapp.com/send?phone=201020625735'">واتساب</button>
        <button onclick="this.parentElement.parentElement.remove()">إلغاء</button>
      </div>
    `;
    document.body.appendChild(popup);
});
