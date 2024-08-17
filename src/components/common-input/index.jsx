export default function CommonInput({name, id, type, value, onChange, label, placeholder}) {
    return (
        <div>
            <label htmlFor={name} style={{fontSize:'18px', paddingRight:'20px', fontWeight:'normal'}}>{label}</label>
            <input name={name}
                    type={type || 'text'}
                    id={id}
                    placeholder={placeholder || "Enter value here"}
                    value={value}
                    onChange={onChange} />
        </div>    
    ) 
}
