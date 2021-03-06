import { Container } from "./styled";
import { SeriesData } from "components";
import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
// SDK de Mercado Pago
/* import mercadoPago from "mercadopago"; */

const Serie = ({ props }) => {
  // SDK de Mercado Pago
  /* const mercadopago = require("mercadopago"); */

  // Agrega credenciales
  /* mercadopago.configure({
    access_token: "process.env.NEXT_PUBLIC_MERCADOPAGO_PROD_ACCESS_TOKEN",
  }); */

  // Crea un objeto de preferencia
  /* let preference = {
    items: [
      {
        title: "Fotocuadro Udforske",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
      global.id = response.body.id;
    })
    .catch(function (error) {
      console.log(error);
    }); */
  // Agrega credenciales
  /* MercadoPago.SDK.setAccessToken(
    process.env.NEXT_PUBLIC_MERCADOPAGO_PROD_ACCESS_TOKEN
  ); */

  console.log(props);
  const [serie, setSerie] = useState({});

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, SetIsOpen] = useState(false);
  const {
    id,
    title,
    countryName,
    desc,
    photos,
    location,
    date,
    countryObj,
  } = props;
  return (
    <Container>
      <section>
        <h1 className="series-title">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75.07"
            height="75.542"
            viewBox="0 0 75.07 75.542"
          >
            <g
              id="Grupo_18"
              data-name="Grupo 18"
              transform="translate(-385.941 -926)"
            >
              <circle
                id="Elipse_5"
                data-name="Elipse 5"
                cx="4.004"
                cy="4.004"
                r="4.004"
                transform="translate(452.598 926)"
                fill="#222"
              />
              <circle
                id="Elipse_6"
                data-name="Elipse 6"
                cx="3.634"
                cy="3.634"
                r="3.634"
                transform="translate(453.742 968.229)"
                fill="#222"
              />
              <circle
                id="Elipse_7"
                data-name="Elipse 7"
                cx="4.139"
                cy="4.139"
                r="4.139"
                transform="translate(399.972 927.918)"
                fill="#222"
              />
              <circle
                id="Elipse_8"
                data-name="Elipse 8"
                cx="4.744"
                cy="4.744"
                r="4.744"
                transform="translate(385.941 992.053)"
                fill="#222"
              />
            </g>
          </svg>
        </h1>
        <div className="img-container">
          {/* MAP DE IMÁGENES */}
          {photos.length &&
            photos.map((photo) => {
              return (
                <div className="flex">
                  <img src={photo} alt={`foto ${title}`} />

                </div>
              );
            })}
          {/* <button type="button" onClick={() => SetIsOpen(true)}>
            {isOpen && (
              <Lightbox
                mainSrc={photos[photoIndex]}
                nextSrc={photos[(photoIndex + 1) % photos.length]}
                prevSrc={
                  photos[(photoIndex + photos.length - 1) % photos.length]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + photos.length - 1) % photos.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % photos.length)
                }
              />
            )}
            Open Lightbox
          </button> */}
        </div>
      </section>
      <section>
        <SeriesData
          place={location.name}
          region={location.region}
          countryName={countryObj.name}
          countryFlag={countryObj.flag}
          description={desc}
          date={date}
        />
      </section>
    </Container>
  );
};

export default Serie;
