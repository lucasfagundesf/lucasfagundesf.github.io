import {Container} from './styles';
import { useTextReveal } from '../../animations/useTextReveal';
import PropTypes from 'prop-types';

export function Quote({quote, author, icon}) {
    const ref = useTextReveal();
    return (
        <Container ref={ref}>
            <div className="quote" id='quote1'>
                <img src={icon} alt="icon Quote" />
            </div>
            <h2>
                {quote}
            </h2>
            <div className="quote" id='quote2'>
                <img src={icon} alt="icon Quote" />
            </div>
            <div className="author">
                <p>{author}</p>
            </div>
        </Container>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    icon: PropTypes.string,
};

Quote.defaultProps = {
    author: '',
    icon: undefined,
};