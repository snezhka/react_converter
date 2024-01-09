import './Phone.css';
export function Phone({ phone }) {
    return (
        <div className="contact">
            <div className="contact_call">
                <img src={phone.src} style={phone.style} alt="call"></img>
                <a href="#" class="contact_call_number">{phone.number}</a>
            </div>
            <div>
                {phone.title}
            </div>
        </div>
    );
}