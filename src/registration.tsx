import './App.css';

function Select(): JSX.Element {
    return (
        <label className="registrationLabel">
            Тип пользователя:
            <br />
            <select className='form-select registrationField lightTheme' name="education" required>
                <option value="undergraduate">Студент</option>
                <option value="student">Школьник</option>
                <option value="parent">Родитель</option>
            </select>
        </label>
    );
}

export default function Registration(): JSX.Element {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        alert(`Имя:${formData.name}Почта: ${formData.mail}\nПароль: ${formData.pass}\nТип: ${formData.education}`);
    }

    return (
        <div id='registrationForm' className='lightTheme'>
            <form method='POST' onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
                <label className="registrationLabel">
                    Имя: <br />
                    <input className="lightTheme form-control registrationField" type="text" name='name' required />
                </label><br />
                <label className="registrationLabel">
                    Почта: <br />
                    <input className="lightTheme form-control registrationField" type="email" name='mail' required />
                </label> <br />
                <label className="registrationLabel">
                    Пароль:<br />
                    <input className="lightTheme form-control registrationField" type='password' name='pass' required />
                </label><br />
                <Select /><br />
                <button type='submit' className='btn btn-primary btn-lg registrationButton'>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
}