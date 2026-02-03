export default function IUIHub({ onBack }) {
  return (
    <section className="iui-hub" id="iui-hub" data-aos="fade-up">
      <div className="container iui-hub-container">
        <div className="iui-hub-header">
          {onBack && (
            <button
              type="button"
              className="hero-btn outline iui-hub-back"
              onClick={onBack}
            >
              ← Back to main site
            </button>
          )}
          <h2>What is IUI?</h2>
        </div>

        <div className="iui-hub-block">
          <p>
            IUI stands for <strong>Intrauterine Insemination</strong>. It is a fertility treatment procedure in which
            specially prepared (washed) sperm is placed directly into the uterus through the cervix using a soft, thin
            catheter.
          </p>
          <p>
            The aim is to bring a higher number of healthy, motile sperm closer to the egg at the right time in the
            menstrual cycle, thereby increasing the chances of conception.
          </p>
        </div>

        <div className="iui-hub-block">
          <h3>Why IUI?</h3>
          <p>Natural sperm transport in the female reproductive tract is surprisingly inefficient. Studies show that:</p>
          <ul>
            <li>Only about 0.1% of sperm reach the cervical canal after one hour</li>
            <li>Only about 1 in 14 million motile sperm reaches the oviduct (fallopian tube), where fertilisation occurs</li>
          </ul>
          <p>IUI bridges this biological gap by:</p>
          <ul>
            <li>Increasing sperm density at the fertilisation site</li>
            <li>Bypassing cervical mucus problems</li>
            <li>Improving the chances that healthy sperm reach the egg at the right time</li>
          </ul>
          <p>In short, IUI makes the journey shorter, more direct, and more efficient for sperm.</p>
        </div>

        <div className="iui-hub-block">
          <h3>Who is IUI for?</h3>
          <p>IUI may be recommended for couples with:</p>
          <ul>
            <li>Unexplained infertility</li>
            <li>Mild male factor infertility (reduced sperm concentration and/or progressive motility)</li>
            <li>Cervical factors, such as thick cervical mucus or cervical stenosis that hinders sperm movement</li>
            <li>
              Ejaculation problems, such as retrograde ejaculation (where sperm flows into the bladder instead of outside
              the penis)
            </li>
            <li>Ovulation disorders, including conditions like PCOS or irregular ovulation</li>
            <li>Dyspareunia or intercourse difficulties, where regular intercourse is painful or not possible</li>
          </ul>
        </div>

        <div className="iui-hub-block">
          <h3>Risks and Safety</h3>
          <p>IUI is generally a safe procedure.</p>
          <p>
            The main concern is the risk of multiple pregnancy when ovarian stimulation leads to the development of too many
            follicles.
          </p>
          <p>Good clinical practice includes:</p>
          <ul>
            <li>Strict aseptic technique</li>
            <li>Conservative ovarian stimulation protocols</li>
            <li>Cancelling cycles if too many follicles develop</li>
            <li>Clear counselling about benefits, success rates, and limitations of IUI</li>
          </ul>
          <p>When done properly, IUI is simple, low-risk, and well tolerated.</p>
        </div>
      </div>
    </section>
  );
}

