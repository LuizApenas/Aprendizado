public class cliente_fisico extends Cliente {
    private String cpf;
    private String rg;
    
    public cliente_fisico(int id, String nome, String cel_ctt, String email, String cpf, String rg) {
        super(id, nome, cel_ctt, email);
        this.cpf = cpf;
        this.rg = rg;

    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }
}
