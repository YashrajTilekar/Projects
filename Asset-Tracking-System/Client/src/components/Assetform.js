import React, { useState } from 'react';

function AssetForm() {

    const [assetId, setAssetId] = useState('');
    const [assetType, setAssetType] = useState('');
    const [modelNo, setModelNo] = useState('');
    const [addedDate, setAddedDate] = useState('');
    const [assetPrice, setAssetPrice] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log('Asset ID:', assetId);
        console.log('Asset Type:', assetType);
        console.log('Model No:', modelNo);
        console.log('Added Date:', addedDate);
        console.log('Asset Price:', assetPrice);

        const response = await fetch('http://localhost:3100/asset/',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    assetType :assetType,
                    assetModelNumber :modelNo,
                    assetAddedDate :addedDate,
                    assetPrice:assetPrice,
                    employeeID :"",
                    assignmentDate:""
                })
            })
    };



    return (
        <div style={styles.container}>
            <h2>Asset Form</h2>
            <form onSubmit={handleSubmit}>
                <label style={styles.label}>
                    Asset Type:
                    <select
                        style={styles.input}
                        value={assetType}
                        onChange={(e) => setAssetType(e.target.value)}
                    >
                        <option value="">Select an asset type</option>
                        <option value="laptop">Laptop</option>
                        <option value="desktop">Desktop</option>
                        <option value="monitor">Monitor</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="mice">Mice</option>
                        <option value="phone">Phone</option>
                        <option value="headset">Headset</option>
                    </select>
                </label>

                <label style={styles.label}>
                    Asset Model No.:
                    <input
                        style={styles.input}
                        type="text"
                        value={modelNo}
                        onChange={(e) => setModelNo(e.target.value)}
                    />
                </label>

                <label style={styles.label}>
                    Asset Added Date:
                    <input
                        style={styles.input}
                        type="date"
                        value={addedDate}
                        onChange={(e) => setAddedDate(e.target.value)}
                    />
                </label>

                <label style={styles.label}>
                    Asset Price:
                    <input
                        style={styles.input}
                        type="number"
                        value={assetPrice}
                        onChange={(e) => setAssetPrice(e.target.value)}
                    />
                </label>

                <button style={styles.button} type="submit">Submit</button>
            </form>
        </div>
    );
}



const styles = {

    container: {

        width: '300px',

        margin: 'auto',

        padding: '20px',

        border: '1px solid #ccc',

        borderRadius: '5px',

        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

    },

    label: {

        display: 'block',

        marginBottom: '10px',

        fontWeight: 'bold',

    },

    input: {

        width: '100%',

        padding: '8px',

        border: '1px solid #ccc',

        borderRadius: '3px',

    },

    button: {

        backgroundColor: '#007bff',

        color: 'white',

        border: 'none',

        padding: '10px 20px',

        borderRadius: '3px',

        cursor: 'pointer',

    },

};



export default AssetForm;