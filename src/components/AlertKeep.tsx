import { Alert } from "keep-react";

interface Props {
     className: string;
}

function AlertKeep({className}: Props) {
     return (
          <Alert color="secondary" className={`inset-x-0 m-auto fixed left-0 bottom-10 transform-translate-x-1/2 ease-in duration-300 w-[340px] opacity-0 invisible ${className}`}>
               <Alert.Container>
                    <Alert.Icon />
                    <Alert.Title>Respuesta copiada al portapapeles</Alert.Title>
               </Alert.Container>
               <Alert.Dismiss />
          </Alert>
     );
}

export default AlertKeep;
