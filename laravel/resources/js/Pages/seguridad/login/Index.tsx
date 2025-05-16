import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import { PagePropsInterface } from "../../../Interfaces/PagePropsInterface";

const Index : React.FC<PagePropsInterface> = ({ errors }) => {
    const { data, setData, post, processing } = useForm({
        correo: '',
        password: ''
    });
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post('/login', {
            onSuccess: () => {
                setData({
                    correo: '',
                    password: ''
                });
            }
        });
    }
    console.log(errors)
  return (
    <>
      <Head title="Login" />

      <main className="d-flex w-100">
        <div className="container-fluid p-0"> 
          <div className="row g-0 vh-100"> 

            {/* Columna izquierda - Imagen  https://dummyimage.com/950x1073/000000/fff&text=Tamila+Software */}
            <div className="col-lg-6 d-none d-lg-flex align-items-center bg-light p-0 m-0">
              <img
                src="/img/yoda.jpeg"
                alt="Login"
                className="img-fluid h-100 object-fit-cover" 
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Columna derecha - Formulario */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center bg-white">
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <div className="text-center mb-4">
                  <h1 className="h2"><i className="fas fa-unlock-alt"></i> Acceso clientes</h1>
                  <p className="lead">Inicie sesión en su cuenta para continuar</p>
                </div>

                <div className="card shadow-sm">
                  <div className="card-body">
                    <form  onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="correo">E-Mail</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          id="correo"
                          value={data.correo}
                          onChange={e => setData('correo', e.target.value)}
                          placeholder="Ingresa tu E-Mail"
                        />
                        {errors?.correo && <p className="text text-danger">{errors.correo.join(', ')}</p>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">Contraseña</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          id="password"
                          value={data.password}
                          onChange={e => setData('password', e.target.value)}
                          placeholder="Intresa tu contraseña"
                        />
                        {errors?.password && <p className="text text-danger">{errors.password.join(', ')}</p>}
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          id="rememberMe"
                          type="checkbox"
                          className="form-check-input"
                          name="remember-me"
                          onChange={() => {}}
                        />
                        <label className="form-check-label text-small" htmlFor="rememberMe">
                          Recordarme
                        </label>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-lg btn-primary" title="Entrar" disabled={processing}>
                        <i className="fas fa-arrow-right"></i> Entrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="text-center mt-3">
                
                  <a href="/register" className="text-decoration-none" title="Olvidé mi contraseña">
                  <i className="fas fa-question-circle"></i> Olvidé mi contraseña
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;