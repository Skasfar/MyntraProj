import myn from "./myntra.module.css"
let Myntra=()=>{
return(
    <section>
        <article id={myn.nav}>
            <div className={myn.logo}> 
                <img src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg" alt="" />
            </div>
            <div className={myn.menu}>
                <div className={myn.mainmenu}>
                    <div>MEN</div>
                    <div>WOMEN</div>
                    <div>KIDS</div>
                    <div>HOME & LIVING</div>
                    <div>BEAUTY</div>
                    <div>STUDIO <sup>NEW</sup></div>
                </div>
                <div id={myn.search}> <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" value={"Search for product"} />
                </div>
                <div className={myn.user}>
                    <div><i class="fa-regular fa-user"></i><span>Profile</span></div>
                    <div><i class="fa-regular fa-heart"></i><span>Wishlist</span></div>
                    <div> <i class="fa-solid fa-bag-shopping"></i><span>Bag</span></div>
                </div>
            </div>
        </article>
    </section>
)
}
export default Myntra