import './Phone.scss';

export function Phone({ phone }) {
    return (
        <div className='contact'>
            <div className='contact_call'>
                <img src={phone.src} style={phone.style} alt='call'></img>
                <a href='#' className='contact_call-number'>{phone.number}</a>
            </div>
            <p>
                {phone.title}
            </p>
        </div>
    );
}