import style from "./Quote.module.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";

export const Quote = () => {
  return (
    <>
      <div className={style.quote}>
        <div className={style.quoteContainer}>
          <div className={style.quoteIcon}>
            <BiSolidQuoteAltRight size={90} color="rgba(0, 0, 0, 0.2)" />
          </div>
          <div className={style.quoteText}>
            <div className={style.quoteTitle}>
              <span>
                "The true work of art is but a shadow of the divine perfection"
              </span>
            </div>
            <div className={style.quoteSubtitle}>
              <span>Michealangelo</span>
            </div>
          </div>
        </div>
        <div className={style.quoteImageContainer}>
          <img src="/quote/1.jpg" alt="" style={{width: "100%", height: "100%"}} />
        </div>
        <div className={style.quoteInformation}>
          <div>
            <span>
              <b>PLEASE READ: </b>In order to secure you appointment and reduce
              the number of cancellations Orlando Lash Lady will require a
              deposit for all services. Payments can be made online through the
              booking calendar. If you need to cancel or change an appointment a
              minimum of 48 hours notice will be required in order to not lose
              your deposit. Only one reschedule allowed per appointment.
            </span>
          </div>
          <div>
            <span>
              <b>POR FAVOR LEA: </b>Para asegurar su cita y reducir el número de
              cancelaciones, Orlando Lash Lady requerirá un depósito del 50%
              para todos los servicios. Los pagos se pueden realizar en línea a
              través del calendario de reservas. Si necesita cancelar o cambiar
              una cita, se requerirá un aviso mínimo de 48horas para no perder
              su depósito. Solo se permite una reprogramación por cita.
            </span>
          </div>
          <div>
            <span>
              <b>IMPORTANT: </b>If you are booking a lash session for a special
              occasion such as a birthday, wedding, etc. Please, book your
              session at least 3 days in advance. This will ensure that your
              lashes look their absolute best on your special day and will give
              enough time to make adjustments if necessary.
            </span>
          </div>
          <div>
            <span>
              <b>IMPORTANTE: </b>Si está reservando una sesión de pestañas para
              una ocasión especial como un cumpleaños, una boda, etc. Por favor,
              reserve su sesión con al menos 3 días de anticipación. Esto
              asegurará que sus pestañas se vean lo mejor posible en su día
              especial y le dará suficiente tiempo para hacer ajustes si es
              necesario.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
