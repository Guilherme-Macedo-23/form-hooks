import React, { useState } from 'react'

import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import '../styles/form.css'

const options = [
    { value: "12345", label: "Nome Exemplo da fazenda" },
];

const optionsLab = [
    { value: "1234", label: "Laboratorio exemplo" },
];

const schema = yup.object().shape({
    infosPropriedade: yup
        .object()
        .shape({
            label: yup.string().required(),
            value: yup.string().required()
        })
        .nullable()
        .required()
});

export default function Form() {

    const { handleSubmit, control, register, formState: { errors } } = useForm({ resolver: yupResolver(schema)});

    const onSubmit = (data) => console.log(data);

    return (
        <div className="App">
            <main>

                <div className="card-post" >
                    <h1>Formulário</h1>
                    <div className="line-post" ></div>
                    <div className="card-body-post" >
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="fields" >
                                <label>Nome</label>
                                <input type="text" name="title" {...register("nome")} />
                            </div>

                            <div className="fields" >
                                <label>Data Inicial</label>
                                <input type="date" name="title" {...register("dataIni")} />
                            </div>

                            <div className="fields" >
                                <label>Data Final</label>
                                <input type="date" name="title" {...register("dataFin")} />
                            </div>

                            <div className="fields" >
                                <label>Info Propriedade</label>
                                <Controller
                                    name="infosPropriedade"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable
                                            isSearchable={false}
                                            className="react-dropdown"
                                            classNamePrefix="dropdown"
                                            options={options}
                                        />
                                    )}
                                />
                            </div>
                            <div className="fields" >
                                <label>CNPJ</label>
                                <input name='cnpj'  {...register("cnpj")}  />
                            </div>

                            <div className="fields" >
                                <label>Laboratório</label>
                                <Controller
                                    name="laboratorio"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable
                                            isSearchable={false}
                                            className="react-dropdown"
                                            classNamePrefix="dropdown"
                                            options={optionsLab}
                                        />
                                    )}
                                />
                            </div>

                            <div className="fields" >
                                <label>Observações</label>
                                <textarea type="text" name="content" {...register("observacao")} ></textarea>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}












// import React, { useState } from 'react'

// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import Select from "react-select";

// import '../styles/form.css'

// const validationPost = yup.object().shape({
//     title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
//     description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
//     content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
// })

// function Post() {

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(validationPost)
//     })

//     const [dataIni, setDataIni] = useState(null)
//     const [dataFin, setDataFin] = useState(null)

//     const [items] = React.useState([
//         { id: "1", name: "First Element" },
//         { id: "2", name: "Second Element" },
//         { id: "3", name: "Third Element" }
//     ]);

//     const options = [
//         { value: "active", label: "Active" },
//         { value: "inactive", label: "In Active" },
//         { value: "deleted", label: "Delete" }
//       ];

//     const addPost = data => console.log(data)

//     return (
//         <div>

            // <main>

            //     <div className="card-post" >

            //         <h1>Criar postagem</h1>
            //         <div className="line-post" ></div>

            //         <div className="card-body-post" >

            //             <form onSubmit={handleSubmit(addPost)} >

            //                 <div className="fields" >
            //                     <label>Nome</label>
            //                     <input type="text" name="title" {...register("title")} />
            //                     <p className="error-message">{errors.title?.message}</p>
            //                 </div>

            //                 <div className="fields" >
            //                     <label>Data Inicial</label>
            //                     <input type="date" name="title" {...register("dataIni")} />
            //                     <p className="error-message">{errors.title?.message}</p>
            //                 </div>

            //                 <div className="fields" >
            //                     <label>Data Final</label>
            //                     <input type="date" name="title" {...register("dataFin")} />
            //                     <p className="error-message">{errors.title?.message}</p>
            //                 </div>

            //                 <div className="fields" >
            //                     <label>Info Propriedade</label>
            //                     <Select
            //                      {...register}
            //                         isClearable 
            //                         isSearchable={false}
            //                         className="react-dropdown"
            //                         classNamePrefix="dropdown"
            //                         options={options}
            //                     />
            //                 </div>

            //                 <div className="fields" >
            //                     <label>CNPJ</label>
            //                     <input type="text" name="description" {...register("description")} />
            //                     <p className="error-message">{errors.description?.message}</p>
            //                 </div>

            //                 <div className="fields" >
            //                     <label>Laboratório</label>
            //                     <Select
            //                         isClearable 
            //                         isSearchable={false}
            //                         className="react-dropdown"
            //                         classNamePrefix="dropdown"
            //                         options={options}
            //                     />
            //                 </div>

            //                 <div className="fields" >
            //                     <label>Observações</label>
            //                     <textarea type="text" name="content" {...register("content")} ></textarea>
            //                     <p className="error-message">{errors.content?.message}</p>
            //                 </div>

            //                 <div className="btn-post" >
            //                     <button type="submit" >Enviar</button>
            //                 </div>

            //             </form>

            //         </div>

            //     </div>

            // </main>

//         </div>
//     )
// }

// export default Post