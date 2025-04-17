function CheckBox({ selectedRoles, handleCheckbox, roles }) {
    return (
        <div className="flex flex-wrap justify-around space-x-4 p-4">
            {roles.map((role) => (
                
                <label key={role} className="flex items-center space-x-2 text-teal-200 text-2xl py-8">
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectedRoles.includes(role)}
                        onChange={() => handleCheckbox(role)}
                    />
                    <span>{role}</span>
                </label>
            ))}
        </div>
    );
}

export default CheckBox;
