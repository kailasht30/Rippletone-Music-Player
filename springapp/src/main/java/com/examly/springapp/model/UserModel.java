package com.examly.springapp.model;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class UserModel implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(generator="uuid")
    @GenericGenerator(name="uuid", strategy="uuid2")
    private String id;
    @NotBlank(message = "Email cannot be null")
    @Email(message = "Please Enter a valid email")
    public String email;
    @NotBlank(message = "Password cannot be null")
    @Size(min=6 , message="Password length should not be less than 6 characters")
    private String password;
    @NotBlank(message = "Name cannot be null")
    private String username;
    @NotBlank(message = "Mobile Number cannot be null")
    @Size(min=10, max=10 , message = "Please Enter 10 digit mobile number")
    private String mobileNumber;
    private Boolean active=false;
    private String role;
    
    //ManyToMany Mapping (Many users can give like to many songs)
    @ManyToMany(mappedBy = "likedUser")
    private List<LikeModel> like; 
    //ManyToMany Mapping (Many users can add to playlist many songs)
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "UserMusic", 
        joinColumns = { @JoinColumn(name = "userid") }, 
        inverseJoinColumns = { @JoinColumn(name = "musicId") }
    )
    private Set<MusicModel> playlist;
    
    

    public UserModel(){

    }

    public UserModel(String id, String email, String password, String username, String mobileNumber, Boolean active, String role, List<LikeModel> like, Set<MusicModel> playlist) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.active = active;
        this.role = role;
        this.like = like;
        this.playlist = playlist;
    }

    

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public Set<MusicModel> getPlaylist() {
        return playlist;
    }

    public void setPlaylist(Set<MusicModel> playlist) {
        this.playlist = playlist;
    }
}