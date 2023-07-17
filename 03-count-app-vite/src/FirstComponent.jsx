import PropTypes from "prop-types"

const newMessage = () => {
    return 'Hola, soy Alan'
}

export const ComponentName = ({ tittle, subtittle }) => {
    return <><h1 data-testid = "test-title">{tittle}</h1>
        <h2>{subtittle}</h2>
        <h2>{subtittle}</h2>
        <p>{newMessage()}</p></>
}

ComponentName.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtittle: PropTypes.string,
}
ComponentName.defaultProps = {
    subtittle: 'Hola, soy el subtitulo',
}