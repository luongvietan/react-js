import CommonInput from "../common-input";

const formType = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA : 'textarea'
}
export default function CommonForm( formControl = [] , handleSubmit, formData, setFormData, buttonText) {
    function renderFormElement(getCurrentElement) {
        let content = null;
        switch (getCurrentElement?.componentType) {
            case formType.INPUT:
                content = <CommonInput
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    placeholder={getCurrentElement.placeholder}
                    type={getCurrentElement.label}
                    value={formData[getCurrentElement.name]}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            [event.target.name] : event.target.value
                        })
                    }}
                />
                break;
        
            default:
                content = <CommonInput
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    placeholder={getCurrentElement.placeholder}
                    type={getCurrentElement.label}
                    value={formData[getCurrentElement.name]}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            [event.target.name] : event.target.value
                        })
                    }}
                />
                break;
        }
        return content
    }
    return (
        <form onSubmit={handleSubmit}>
            {formControl?.length ?
                formControl.map((singleFormElementItem) => {
                    renderFormElement(singleFormElementItem)
                })
                : null}
            <div style={{ marginTop: '12px' }}>
                <button type="submit" style={{ fontSize : '18px' }}>{buttonText ||"Submit"}</button>
            </div>
        </form>)
}
