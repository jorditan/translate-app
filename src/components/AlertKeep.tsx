import { Alert } from "keep-react";

interface Props {
     className: string;
}

function AlertKeep({className}: Props) {
     return (
          <Alert color="secondary" className={`absolute left-1/2 bottom-20 transform -translate-x-1/2 ease-in duration-300 opacity-0 invisible ${className}`}>
               <Alert.Container>
                    <Alert.Icon />
                    <Alert.Title>Respuesta copiada al portapapeles</Alert.Title>
               </Alert.Container>
               <Alert.Dismiss />
          </Alert>
     );
}

export default AlertKeep;
