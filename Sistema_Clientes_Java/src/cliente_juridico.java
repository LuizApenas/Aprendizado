public class cliente_juridico extends Cliente {

    private String cnpj;
    private String ie; //inscricao estadual *

    public cliente_juridico(int id, String nome, String cel_ctt, String email, String cnpj, String ie){
    super(id, nome, cel_ctt, email);
    this.cnpj = cnpj;
    this.ie = ie;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getIe() {
        return ie;
    }

    public void setIe(String ie) {
        this.ie = ie;
    }
}
