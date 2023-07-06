import PropTypes from "prop-types"

const newMessage = ()=> {
    return 'Hola, soy Alan'
}

export const ComponentName = ({tittle, subtittle}) => {
    return <><h2>{ tittle }</h2>
            <h3>{subtittle}</h3>
            <p>{ newMessage() }</p></>
}

ComponentName.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtittle: PropTypes.string,
}
ComponentName.defaultProps = {
    subtittle: 'Hola, soy el subtitulo',
}