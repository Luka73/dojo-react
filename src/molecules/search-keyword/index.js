import React from 'react'
import { DojoButton } from '../../atoms/button'
import Input from '../../atoms/input'

const SearchKeyword = (props) => {
    return (
        <form className="form-inline my-2 my-lg-0">
            <Input />
            <DojoButton>Pesquisar</DojoButton>
        </form>
    )
}

export default SearchKeyword;