node {
    def CverI
	def WverI
    def BP_dir = '/usr/lib/servicepattern/setup/'
    def remote = [:]
    remote.name = 'main'
    remote.host = 'ilesnikov02.bugfocus.com'
    remote.user = 'root'
    remote.password = '123'
    remote.allowAnyHosts = true
    
    stage('show vars'){
        echo ('BP_dir = ' + BP_dir)
    }
    
	stage('Check connect to Master host'){
		echo 'Connecting to master host.......'
		def Current_dir = sshCommand remote: remote, command: "pwd"
		echo ('Current dir = ' + Current_dir)
		sshCommand remote: remote, command: "ls -l"
	}
	stage('Check available RPM by deleting it'){
        echo ('Delete RPM')
        sshCommand remote: remote, command: "rm -v -f /home/servicepattern-*.rpm"
	}
	stage('Checking version installed RPMs'){
	     CverI = sshCommand remote: remote, command: "rpm -q servicepattern-core.x86_64"
		 WverI = sshCommand remote: remote, command: "rpm -q servicepattern-web.x86_64"
		 echo ('Installed version of servicepattern-core = ' + CverI)
		 echo ('Installed version of servicepattern-web = ' + WverI)
	}
	
}