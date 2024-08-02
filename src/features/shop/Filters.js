import { Button, Checkbox, FormControlLabel, FormLabel, Icon, Radio, RadioGroup, Slider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useParams } from "react-router";

export default function Filters({ filterProducts, highestPrice, setChecked }) {
    const typeParam = useSelector(state => state.typeParam.typeParam)
    const [checkedTypes, setCheckedTypes] = useState({
        ring: false,
        earring: false,
        necklace: false
    })
    const [formData, setFormData] = useState({
        checked: [],
        pricePercent: 0,
        sort: 'Relevance'
    })

    function handleSubmit(e) {
        e.preventDefault()
        filterProducts(formData)
    }

    useEffect(() => {
        if (typeParam !== 'all'){
            const update = {...checkedTypes, [typeParam] : true}
            setCheckedTypes(update)

            if (update[typeParam] === true) {
                const update = ({ ...formData, checked: [...formData.checked, typeParam] })
                if (update.checked.length === 1) {
                    filterProducts(update)
                }
                setFormData({ ...formData, checked: [...formData.checked, typeParam] })
            } else {
                const updatedData = formData.checked.filter(c => c !== typeParam)
                setFormData({ ...formData, checked: updatedData })
            }
        } 
    }, [typeParam])



    function handleChange(e) {
        if (e.target.value === 'on') {
            const updatedCheckedTypes = { ...checkedTypes, [e.target.name]: e.target.checked }
            setCheckedTypes(updatedCheckedTypes)

            if (updatedCheckedTypes[e.target.name] === true) {
                const updatedData = { ...formData, checked: [...formData.checked, e.target.name] }
                setFormData(updatedData)
            } else {
                const updatedData = formData.checked.filter(c => c !== e.target.name)
                setFormData({ ...formData, checked: updatedData })
            }
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    function resetForm() {
        setFormData(prev => prev = {
            checked: [],
            pricePercent: 0,
            sort: false
        })
        setCheckedTypes({
            ring: false,
            earring: false,
            necklace: false
        })
    }


    return (
        <form className="filtersform" value={formData} onSubmit={handleSubmit}>
            <FormLabel>Filter Products</FormLabel>
            <div className="jewelry_type">
                <FormControlLabel control={<Checkbox name='ring' checked={checkedTypes.ring || false} onChange={handleChange} />} label="Rings" />
                <FormControlLabel control={<Checkbox name='necklace' checked={checkedTypes.necklace || false} onChange={handleChange} />} label="Necklaces" />
                <FormControlLabel control={<Checkbox name='earring' checked={checkedTypes.earring || false} onChange={handleChange} />} label="Earrings" />
            </div>

            <Stack spacing={2} direction="row" sx={{ mb: 1, marginTop: '20%' }} alignItems="center">
                <Typography variant="body1">$0</Typography>
                <Slider name="pricePercent" aria-label="Price" value={formData.pricePercent} onChange={handleChange} />
                <Typography variant="body1">${highestPrice}</Typography>
            </Stack>


            <RadioGroup sx={{ marginTop: "20%" }} name="sort" value={formData.sort} onChange={handleChange}>
                <FormLabel>Sort Products</FormLabel>
                <FormControlLabel value={`Relevance`} control={<Radio />} label='Relevance' />
                <FormControlLabel value={`Price: Low -> High`} control={<Radio />} label={<>Price: Low <ArrowRightAltIcon sx={{ position: 'relative', top: '.65vh' }} /> High</>} />
                <FormControlLabel value={`Price: High -> Low`} control={<Radio />} label={<>Price: High <ArrowRightAltIcon sx={{ position: 'relative', top: '.65vh' }} /> Low</>} />
            </RadioGroup>

            <br />

            <Button type='submit' variant="text" color="success">Search</Button>
            <br />
            <Button type="submit" variant="text" color="error" onClick={() => resetForm()}>Clear Filters</Button>
        </form>
    )
}