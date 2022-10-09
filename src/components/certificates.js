import React from "react";
import style from '../stylesheets/certificates.module.css'
import Title from "./title/title";

const Certificates = props => {
    return(
        <div className={style.certificates} style={props.width}>
            <Title text="Certifications"/>
            <div className={style.OuterWrapper}>
                <div className={style.InnerWrapper}>
                    <Badge
                        text="AWS Practioner, participation certification."
                        link="https://drive.google.com/uc?export=download&id=1ivvhfqSkKp4PG4K-2sK4T5rUyFWw_saf"
                    />
                    <Badge
                        text="SQL cognitive class"
                        link="https://drive.google.com/uc?export=download&id=1m4DjC44rX2FrhofexOaboFgWppdhxrcc"
                    />
                    <Badge
                        text="Ylytic Internship certificate (2 Months)"
                        link="https://drive.google.com/uc?export=download&id=1Vj4W0K2H8gINn5aFeIcF6c-8Kx4zMvNi"
                    />
                    <Badge
                        text="Crash course on Python"
                        link="https://drive.google.com/uc?export=download&id=1fyGHqAOuriGFPj9bYJAme7kcCxM6Ub1E"
                    />
                    <Badge
                        text="Foundation of UX design"
                        link="https://drive.google.com/uc?export=download&id=1ZJc6EwY5PvFoToXzhil2IH0Wnl8w0iXh"
                    />
                    <Badge
                        text="UX design process-Empathize, Define"
                        link="https://drive.google.com/uc?export=download&id=1BKyql03KRmfeRIEBQm9MUuYCJqmOJvr0"
                    />                                        
                </div>
            </div>
        </div>
    )
}

export const Badge = props => {
    return(
        <a href={props.link} target="_blank" className={style.certificate}>
            <div className={style.badge}>
                <img src="./icons/Badge.png"></img>
            </div>
            <div className={style.name}>
                <h3>{props.text}</h3>
            </div>
        </a>
    )
}

export default Certificates