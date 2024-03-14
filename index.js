const wrapper= document.getElementById("app").getBoundingClientRect()
const code = (
    <div id="proposal" className="proposal">
        <h1 id="proposaltxt" className="proposaltxt">WILL YOU GO OUT WITH ME?</h1>
        <img className="img" id="img" src="dudupropose.gif" width="276.77" height="238" />
        <div className="button" id="button">
            <button className="yes" id="yes" onClick={yes}>Yes</button>
            <button className="no" id="no" onHover={no}>No</button>
        </div>

    </div>
)

function yes(){
    document.getElementById("img").src = "happydudu.gif";
    document.getElementById("proposaltxt").innerText="Thank You So Much!!!";
    document.getElementById("proposaltxt").align="center";
    document.getElementById("no").style.display="none";
    document.getElementById("yes").style.marginLeft="0px";
    return;
}
function no(){
    document.getElementById("img").src = "saddudu.gif";
    document.getElementById("proposaltxt").innerText="PWEASE T_T";
    document.getElementById("proposaltxt").align="center"
    const i= Math.floor(Math.random()*(85)+1);
    const j= Math.floor(Math.random()*(85)+1);
    document.getElementById("no").style.left= i+"%";
    document.getElementById("no").style.top= j+"%";
    return;
}

ReactDOM.render(code,document.getElementById("app"))
