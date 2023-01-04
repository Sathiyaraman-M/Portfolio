import PageHeader from "../components/shared/page-header";
import ExpertiseItem from "../components/expertise-item";
import ExpertiseSection from "../components/sections/expertise-section";

const Expertise = () => {
    const languages = [
        <ExpertiseItem key={1} name="C#" image="/expertise/csharp.png" setBgColor={false} />,
        <ExpertiseItem key={2} name="JavaScript" image="/expertise/javascript.png" setBgColor={false} />,
        <ExpertiseItem key={3} name="TypeScript" image="/expertise/typescript.png" setBgColor={false} />,
        <ExpertiseItem key={4} name="C" image="/expertise/c.png" setBgColor={false} />,
        <ExpertiseItem key={5} name="C++" image="/expertise/cpp.png" setBgColor={false} />,
        <ExpertiseItem key={6} name="Java" image="/expertise/java.png" setBgColor={false} />,
        <ExpertiseItem key={7} name="F#" image="/expertise/fsharp.png" setBgColor={false} />,
        <ExpertiseItem key={8} name="XAML" image="/expertise/xaml.png" setBgColor={false} />,
        <ExpertiseItem key={9} name="YAML" image="/expertise/yaml.png" setBgColor={false} />,
        <ExpertiseItem key={10} name="Python" image="/expertise/python.png" setBgColor={false} />,
        <ExpertiseItem key={11} name="HTML" image="/expertise/html.png" setBgColor={false} />,
        <ExpertiseItem key={12} name="CSS" image="/expertise/css.png" setBgColor={false} />,
    ]
    const frameworks = [
        <ExpertiseItem key={1} name="ASP.NET Core MVC" image="/expertise/aspnetcore-mvc.png" setBgColor={true} />,
        <ExpertiseItem key={2} name="ASP.NET Core API" image="/expertise/aspnetcore.jpg" setBgColor={true} />,
        <ExpertiseItem key={3} name="Blazor" image="/expertise/blazor.png" setBgColor={true} />,
        <ExpertiseItem key={4} name="Bootstrap" image="/expertise/bootstrap.png" setBgColor={true} />,
        <ExpertiseItem key={5} name="Angular" image="/expertise/angular.png" setBgColor={true} />,
        <ExpertiseItem key={6} name="React" image="/expertise/react.png" setBgColor={true} />,
        <ExpertiseItem key={7} name="Windows Forms" image="/expertise/windowsforms.png" setBgColor={true} />,
        <ExpertiseItem key={8} name="WPF (.NET)" image="/expertise/wpf.png" setBgColor={true} />,
        <ExpertiseItem key={9} name="WinUI (.NET)" image="/expertise/winui.png" setBgColor={true} />,
        <ExpertiseItem key={10} name="Flutter" image="/expertise/flutter.png" setBgColor={true} />,
    ]
    const databases = [
        <ExpertiseItem key={1} name="SQL Server" image="/expertise/sql-server.png" setBgColor={false} />,
        <ExpertiseItem key={2} name="MySQL" image="/expertise/mysql.png" setBgColor={false} />,
        <ExpertiseItem key={3} name="PostgreSQL" image="/expertise/postgresql.png" setBgColor={false} />,
        <ExpertiseItem key={4} name="Sqlite" image="/expertise/sqlite.png" setBgColor={false} />,
    ]
    const softwaresAndTools = [
        <ExpertiseItem key={1} name="Arch Linux" image="/expertise/arch.png" setBgColor={true} />,
        <ExpertiseItem key={2} name="Android Studio" image="/expertise/androidstudio.png" setBgColor={true} />,
        <ExpertiseItem key={3} name="Azure Pipelines" image="/expertise/azurepipelines.png" setBgColor={true} />,
        <ExpertiseItem key={4} name="Docker" image="/expertise/docker.png" setBgColor={true} />,
        <ExpertiseItem key={5} name="Firebase Hosting" image="/expertise/firebase.png" setBgColor={true} />,
        <ExpertiseItem key={6} name="Git" image="/expertise/git.png" setBgColor={true} />,
        <ExpertiseItem key={7} name="GitHub Actions" image="/expertise/githubactions.png" setBgColor={true} />,
        <ExpertiseItem key={8} name="IIS" image="/expertise/iis.png" setBgColor={true} />,
        <ExpertiseItem key={9} name="IntelliJ IDEA" image="/expertise/intellijidea.png" setBgColor={true} />,
        <ExpertiseItem key={10} name="Jetbrains Rider" image="/expertise/rider.png" setBgColor={true} />,
        <ExpertiseItem key={11} name="Oracle VM VirtualBox" image="/expertise/vbox.png" setBgColor={true} />,
        <ExpertiseItem key={12} name="Postman" image="/expertise/postman.png" setBgColor={true} />,
        <ExpertiseItem key={13} name="SQL Server Management Studio" image="/expertise/sql-server-management-studio.png" setBgColor={true} />,
        <ExpertiseItem key={14} name="Ubuntu" image="/expertise/ubuntu.png" setBgColor={true} />,
        <ExpertiseItem key={15} name="Visual Studio" image="/expertise/vs.png" setBgColor={true} />,
        <ExpertiseItem key={16} name="Visual Studio Code" image="/expertise/vsc.png" setBgColor={true} />,
        <ExpertiseItem key={17} name="WebStorm" image="/expertise/webstorm.png" setBgColor={true} />,
        <ExpertiseItem key={18} name="Windows Subsystem for Linux" image="/expertise/wsl.png" setBgColor={true} />,
    ]
    return (
        <>
            <PageHeader pageTitle="Expertise" />
            <ExpertiseSection title={"Languages I have worked"} content={languages} setBgColor={false} />
            <ExpertiseSection title={"Frameworks I have worked"} content={frameworks} setBgColor={true} />
            <ExpertiseSection title={"Databases I have worked"} content={databases} setBgColor={false} />
            <ExpertiseSection title={"Softwares and Tools I have worked"} content={softwaresAndTools} setBgColor={true} />
        </>
    );
}

export default Expertise;