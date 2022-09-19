function StudentInfo({ name, age, bio, count, numberOfStudents }) {
    console.log('se pinta')
    const writeMessage = () => {
        if (age > 20) {
            return 'You are an adult'
        } else {
            return 'You are a child'
        }
    }

    return (
        <div> 
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{writeMessage()}</p>
            {bio
                ? (
                    <p>{bio}</p>
                ) : (
                    <p>No hay bio</p>
                )
            }
            {bio && (<p>{bio}</p>)}
            <p>{count}</p>
            <p>Number of students: {numberOfStudents}</p>
        </div>
    )
}

export default StudentInfo