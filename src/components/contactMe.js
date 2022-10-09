import React from "react"
import style from '../stylesheets/contactMe.module.css'
import Title from './title/title.js'

const ContactMe = props => {
    return(
        <div className={style.contactMe} style={props.width}>
            <Title text="Contact Me" />
            <div className={style.OuterWrapper}>
                <div className={style.leftSide}>
                    <a href="https://leetcode.com/Hackytech/" className={style.contactBox} target="_blank">
                        <div className={style.contactBox}>
                            <img src="./SMLogo/leetcode.svg"></img>
                            <h3>Leetcode</h3>
                        </div>
                    </a>
                    
                    <a href="https://www.codechef.com/users/hackytech" className={style.contactBox} target="_blank">
                        <div className={style.contactBox}>
                            <img src="./SMLogo/codechef.svg"></img>
                            <h3>Codechef</h3>
                        </div>
                    </a>

                    <div className={style.contactBox + ' ' + style.gridColSpan2}>
                        <img src="./SMLogo/whatsapp.svg"></img>
                        <h3>Whatsapp</h3>
                    </div>

                    <a href="https://app.codesignal.com/profile/hackytech" className={style.contactBox} target="_blank">
                        <div className={style.contactBox}>
                            <img src="./SMLogo/codesignal.svg"></img>
                            <h3>Codesignal</h3>
                        </div>
                    </a>

                    <a href="https://www.hackerrank.com/tanmaychavan1306" className={style.contactBox} target="_blank">
                        <div className={style.contactBox}>
                            <img src="./SMLogo/hackerRank.svg"></img>
                            <h3>Hackerrank</h3>
                        </div>
                    </a>

                    <div className={style.contactBox}>
                        <img src="./SMLogo/gapFiller.jpg"></img>
                    </div>

                    <a href="mailto:tanmaychavan1306@gmail.com" className={style.contactBox} target="_blank">
                        <div className={style.contactBox}>
                            <img src="./SMLogo/email.svg"></img>
                            <h3>Email</h3>
                        </div>
                    </a>

                </div>
                <div className={style.rightSide}>
                    <img src="./wolfs/contactme.png"></img>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;