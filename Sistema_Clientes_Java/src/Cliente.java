public class Cliente {

    int id;
    String nome;
    String cel_ctt;
    String email;

    public Cliente(int id, String nome, String cel_ctt, String email) {
        this.id = id;
        this.nome = nome;
        this.cel_ctt = cel_ctt;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCel_ctt() {
        return cel_ctt;
    }

    public void setCel_ctt(String cel_ctt) {
        this.cel_ctt = cel_ctt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}

